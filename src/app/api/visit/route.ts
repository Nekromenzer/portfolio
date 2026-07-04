import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type VisitPayload = {
  visitorId?: string;
  pathname?: string;
  referrer?: string;
};

const localLogPath = path.join(process.cwd(), ".visit-logs", "visits.jsonl");

function getCountryCode(request: NextRequest) {
  return (
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-country-code") ||
    "Unknown"
  ).toUpperCase();
}

function getCountryName(countryCode: string) {
  if (countryCode === "UNKNOWN") return "Unknown";

  try {
    return (
      new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode) ??
      countryCode
    );
  } catch {
    return countryCode;
  }
}

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return undefined;

  const trimmed = value.trim();
  if (!trimmed) return undefined;

  return trimmed.slice(0, maxLength);
}

async function writeLocalLog(line: string) {
  if (process.env.NODE_ENV === "production") return;

  await mkdir(path.dirname(localLogPath), { recursive: true });
  await appendFile(localLogPath, `${line}\n`, "utf8");
}

export async function POST(request: NextRequest) {
  let payload: VisitPayload = {};

  try {
    payload = (await request.json()) as VisitPayload;
  } catch {
    payload = {};
  }

  const countryCode = getCountryCode(request);
  const visit = {
    type: "portfolio_visit",
    viewedAt: new Date().toISOString(),
    country: getCountryName(countryCode),
    countryCode,
    pathname: cleanText(payload.pathname, 160) ?? "/",
    referrer: cleanText(payload.referrer, 300) ?? "direct",
    visitorId: cleanText(payload.visitorId, 80) ?? "anonymous",
  };
  const line = JSON.stringify(visit);

  console.info(line);

  try {
    await writeLocalLog(line);
  } catch (error) {
    console.error("portfolio_visit_local_log_failed", error);
  }

  return NextResponse.json({ ok: true });
}
