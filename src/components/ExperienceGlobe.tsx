"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type ExperienceProject = {
  title: string;
  place?: string;
  description: string;
  href?: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  location: string;
  mapLabel: string;
  countryCode: string;
  latitude: number;
  longitude: number;
  isCurrent: boolean;
  body: string;
  projects: ExperienceProject[];
};

type Props = {
  items: ExperienceItem[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

type Geometry = {
  id: string;
  type: string;
  coords: number[][][] | number[][][][];
};

type CountryPath = {
  id: string;
  pathD: string;
  isExperienceCountry: boolean;
};

const COUNTRY_CODES: Record<string, string> = {
  "144": "LKA",
  "528": "NLD",
  "752": "SWE",
  "784": "ARE",
};

const DATA_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const DEG_TO_RAD = Math.PI / 180;
const MAX_LATITUDE = 85.05113;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function mercatorProject(
  longitude: number,
  latitude: number,
  scale: number,
  originX: number,
  originY: number,
) {
  const projectedLatitude =
    clamp(latitude, -MAX_LATITUDE, MAX_LATITUDE) * DEG_TO_RAD;

  return [
    scale * longitude * DEG_TO_RAD + originX,
    -scale * Math.log(Math.tan(Math.PI / 4 + projectedLatitude / 2)) + originY,
  ] as const;
}

function getProjection(width: number, height: number) {
  const scale = width / (2 * Math.PI);
  const originX = width / 2;

  const northY =
    -scale * Math.log(Math.tan(Math.PI / 4 + (72 * DEG_TO_RAD) / 2));
  const southY =
    -scale * Math.log(Math.tan(Math.PI / 4 + (-56 * DEG_TO_RAD) / 2));

  return [scale, originX, height / 2 - (northY + southY) / 2] as const;
}

function decodeArcs(topology: {
  arcs: number[][][];
  transform?: { scale: [number, number]; translate: [number, number] };
}) {
  const { transform } = topology;

  if (!transform) return topology.arcs;

  const [scaleX, scaleY] = transform.scale;
  const [translateX, translateY] = transform.translate;

  return topology.arcs.map((arc) => {
    let x = 0;
    let y = 0;

    return arc.map(([dx, dy]) => {
      x += dx;
      y += dy;

      return [x * scaleX + translateX, y * scaleY + translateY];
    });
  });
}

function resolveRing(indices: number[], arcs: number[][][]) {
  const points: number[][] = [];

  for (const index of indices) {
    const arc = index >= 0 ? arcs[index] : arcs[~index].slice().reverse();

    for (let i = points.length > 0 ? 1 : 0; i < arc.length; i += 1) {
      points.push(arc[i]);
    }
  }

  return points;
}

function extractFeatures(topology: {
  arcs: number[][][];
  transform?: { scale: [number, number]; translate: [number, number] };
  objects: {
    countries?: {
      geometries: Array<{
        id?: string | number;
        type: string;
        arcs: number[][] | number[][][];
      }>;
    };
  };
}) {
  const decodedArcs = decodeArcs(topology);
  const geometries = topology.objects.countries?.geometries ?? [];

  return geometries
    .map((geometry) => {
      let coords: Geometry["coords"] | null = null;

      if (geometry.type === "Polygon") {
        coords = (geometry.arcs as number[][]).map((ring) =>
          resolveRing(ring, decodedArcs),
        );
      }

      if (geometry.type === "MultiPolygon") {
        coords = (geometry.arcs as number[][][]).map((polygon) =>
          polygon.map((ring) => resolveRing(ring, decodedArcs)),
        );
      }

      if (!coords) return null;

      return {
        id: String(geometry.id ?? ""),
        type: geometry.type,
        coords,
      };
    })
    .filter((feature): feature is Geometry => feature !== null);
}

function ringToPath(
  ring: number[][],
  scale: number,
  originX: number,
  originY: number,
  width: number,
) {
  if (ring.length < 3) return "";

  const points = ring.map(([longitude, latitude]) =>
    mercatorProject(longitude, latitude, scale, originX, originY),
  );

  const threshold = width / 3;
  const segments: Array<ReadonlyArray<readonly [number, number]>> = [];
  let current: Array<readonly [number, number]> = [points[0]];

  for (let i = 1; i < points.length; i += 1) {
    if (Math.abs(points[i][0] - points[i - 1][0]) > threshold) {
      if (current.length >= 2) segments.push(current);
      current = [points[i]];
    } else {
      current.push(points[i]);
    }
  }

  if (current.length >= 2) segments.push(current);
  if (segments.length === 0) return "";

  return segments
    .map((segment) =>
      segment
        .map(
          ([x, y], index) =>
            `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`,
        )
        .join(""),
    )
    .join("");
}

function buildPath(
  type: string,
  coords: Geometry["coords"],
  scale: number,
  originX: number,
  originY: number,
  width: number,
) {
  if (type === "Polygon") {
    return (coords as number[][][])
      .map((ring) => {
        const path = ringToPath(ring, scale, originX, originY, width);
        return path ? `${path}Z` : "";
      })
      .join("");
  }

  if (type === "MultiPolygon") {
    return (coords as number[][][][])
      .map((polygon) =>
        polygon
          .map((ring) => {
            const path = ringToPath(ring, scale, originX, originY, width);
            return path ? `${path}Z` : "";
          })
          .join(""),
      )
      .join("");
  }

  return "";
}

function buildGraticule(
  scale: number,
  originX: number,
  originY: number,
  width: number,
  height: number,
) {
  const parts: string[] = [];

  for (let latitude = -60; latitude <= 60; latitude += 30) {
    const segment: string[] = [];

    for (let longitude = -180; longitude <= 180; longitude += 3) {
      const [x, y] = mercatorProject(
        longitude,
        latitude,
        scale,
        originX,
        originY,
      );

      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        segment.push(
          `${segment.length === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`,
        );
      }
    }

    if (segment.length > 1) parts.push(segment.join(""));
  }

  for (let longitude = -180; longitude <= 180; longitude += 30) {
    const segment: string[] = [];

    for (let latitude = -80; latitude <= 80; latitude += 2) {
      const [x, y] = mercatorProject(
        longitude,
        latitude,
        scale,
        originX,
        originY,
      );

      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        segment.push(
          `${segment.length === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`,
        );
      }
    }

    if (segment.length > 1) parts.push(segment.join(""));
  }

  return parts.join(" ");
}

export default function ExperienceGlobe({
  items,
  activeIndex,
  onSelect,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [dimensions, setDimensions] = useState({
    width: 900,
    height: 500,
  });

  const [features, setFeatures] = useState<Geometry[] | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    const node = containerRef.current;

    if (!node) return undefined;

    const resizeObserver = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;

      if (!rect || rect.width <= 0 || rect.height <= 0) return;

      setDimensions({
        width: rect.width,
        height: rect.height,
      });
    });

    resizeObserver.observe(node);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    let isDisposed = false;

    fetch(DATA_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Map data unavailable");
        }

        return response.json();
      })
      .then((topology) => {
        if (!isDisposed) {
          setFeatures(extractFeatures(topology));
          setLoadFailed(false);
        }
      })
      .catch(() => {
        if (!isDisposed) {
          setLoadFailed(true);
        }
      });

    return () => {
      isDisposed = true;
    };
  }, []);

  const [scale, originX, originY] = useMemo(
    () => getProjection(dimensions.width, dimensions.height),
    [dimensions.height, dimensions.width],
  );

  const experienceCountries = useMemo(
    () => new Set(items.map((item) => item.countryCode)),
    [items],
  );

  const countryPaths = useMemo(() => {
    if (!features) return [];

    return features
      .map((feature) => {
        const countryCode = COUNTRY_CODES[feature.id] ?? feature.id;

        const pathD = buildPath(
          feature.type,
          feature.coords,
          scale,
          originX,
          originY,
          dimensions.width,
        );

        if (!pathD) return null;

        return {
          id: countryCode,
          pathD,
          isExperienceCountry: experienceCountries.has(countryCode),
        };
      })
      .filter((feature): feature is CountryPath => feature !== null);
  }, [
    dimensions.width,
    experienceCountries,
    features,
    originX,
    originY,
    scale,
  ]);

  const graticule = useMemo(
    () =>
      buildGraticule(
        scale,
        originX,
        originY,
        dimensions.width,
        dimensions.height,
      ),
    [dimensions.height, dimensions.width, originX, originY, scale],
  );

  const positions = useMemo(
    () =>
      items.map((item) => {
        const [x, y] = mercatorProject(
          item.longitude,
          item.latitude,
          scale,
          originX,
          originY,
        );

        return { x, y };
      }),
    [items, originX, originY, scale],
  );

  return (
    <div className="experience-globe" ref={containerRef}>
      {features === null && !loadFailed ? (
        <div className="globe-loading">Loading map data...</div>
      ) : null}

      {loadFailed ? (
        <div className="globe-loading globe-loading-error">
          Map data unavailable
        </div>
      ) : null}

      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        className="globe-svg"
        aria-hidden
      >
        <defs>
          <filter id="glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="globeOverlay" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(44, 49, 55, 0.25)" />
            <stop offset="60%" stopColor="rgba(23, 26, 30, 0.08)" />
            <stop offset="100%" stopColor="rgba(15, 17, 20, 0.2)" />
          </linearGradient>
        </defs>

        <rect width={dimensions.width} height={dimensions.height} fill="#111417" />

        <rect
          width={dimensions.width}
          height={dimensions.height}
          fill="url(#globeOverlay)"
        />

        <path
          d={graticule}
          fill="none"
          stroke="rgba(97, 211, 195, 0.12)"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />

        {countryPaths.map((country,idx) => (
          <path
            key={`${country.id}_${idx}`}
            d={country.pathD}
            fill={
              country.isExperienceCountry
                ? "rgba(97, 211, 195, 0.28)"
                : "rgba(34, 40, 44, 0.96)"
            }
            stroke={
              country.isExperienceCountry
                ? "rgba(97, 211, 195, 0.65)"
                : "rgba(97, 211, 195, 0.14)"
            }
            strokeWidth={country.isExperienceCountry ? "0.9" : "0.45"}
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {positions.map((position, index) => {
          const item = items[index];
          const isActive = index === activeIndex;
          const markerColor = item.isCurrent ? "#61d3c3" : "#cc5a5a";

          return (
            <g
              key={`${item.company}-${item.location}`}
              transform={`translate(${position.x.toFixed(1)},${position.y.toFixed(1)})`}
              filter={isActive ? "url(#glow)" : undefined}
            >
              <circle
                r={isActive ? 18 : 13}
                fill={
                  item.isCurrent
                    ? "rgba(97, 211, 195, 0.12)"
                    : "rgba(204, 90, 90, 0.12)"
                }
              />
              <circle r={isActive ? 8 : 6} fill={markerColor} />
            </g>
          );
        })}
      </svg>

      {positions.map((position, index) => {
        const item = items[index];
        const isActive = index === activeIndex;

        return (
          <button
            key={`${item.company}-${item.mapLabel}-button`}
            type="button"
            className={`globe-marker-button${isActive ? " is-active" : ""}${
              item.isCurrent ? " is-current" : " is-previous"
            }`}
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
            onClick={() => onSelect(index)}
            aria-pressed={isActive}
            aria-label={`Show ${item.company} details for ${item.location}`}
          >
            <span className="globe-marker-dot" />
            <span className="globe-marker-label">{item.mapLabel}</span>
          </button>
        );
      })}
    </div>
  );
}
