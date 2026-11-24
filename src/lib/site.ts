export const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nekromenzer.online").replace(/\/$/, "");

export function assetPath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
