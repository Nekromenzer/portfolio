import {
  ArrowUpRight,
  FileText,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { SVGProps } from "react";

export function GithubBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.09.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.8c0 .27.18.59.69.49A10.18 10.18 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function LinkedinBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M5.15 8.46H2.27V21h2.88V8.46ZM3.71 3C2.76 3 2 3.76 2 4.7c0 .92.74 1.69 1.67 1.69h.02c.97 0 1.72-.77 1.72-1.7C5.39 3.76 4.66 3 3.71 3Zm8.22 5.17c-1.56 0-2.54.86-2.98 1.46V8.46H6.08V21h2.87v-7.02c0-.38.03-.75.14-1.02.31-.75 1.02-1.52 2.2-1.52 1.55 0 2.17 1.18 2.17 2.91V21h2.87v-6.98c0-3.74-2-5.85-4.4-5.85Z" />
    </svg>
  );
}

export function YoutubeBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.58 7.18a2.78 2.78 0 0 0-1.96-1.97C17.9 4.75 12 4.75 12 4.75s-5.9 0-7.62.46a2.78 2.78 0 0 0-1.96 1.97A29.08 29.08 0 0 0 2 12a29.08 29.08 0 0 0 .42 4.82 2.78 2.78 0 0 0 1.96 1.97c1.72.46 7.62.46 7.62.46s5.9 0 7.62-.46a2.78 2.78 0 0 0 1.96-1.97A29.08 29.08 0 0 0 22 12a29.08 29.08 0 0 0-.42-4.82ZM10 15.25v-6.5L15.2 12 10 15.25Z" />
    </svg>
  );
}

export function TiktokBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.6 3c.28 2.2 1.5 3.52 3.7 3.66v3.12a6.95 6.95 0 0 1-3.63-1.08v5.68c0 2.88-1.75 5.62-5.47 5.62-3.1 0-5.5-2.08-5.5-5.08 0-3.32 2.7-5.3 5.98-5.05v3.17c-1.5-.22-2.72.47-2.72 1.78 0 1.1.86 1.86 2.05 1.86 1.36 0 2.2-.78 2.2-2.65V3h3.39Z" />
    </svg>
  );
}

export function getContactIcon(icon: string | undefined) {
  switch (icon) {
    case "resume":
      return FileText;
    case "email":
      return Mail;
    case "github":
      return GithubBrandIcon;
    case "linkedin":
      return LinkedinBrandIcon;
    case "youtube":
      return YoutubeBrandIcon;
    case "tiktok":
      return TiktokBrandIcon;
    case "phone":
      return Phone;
    case "location":
      return MapPin;
    default:
      return ArrowUpRight;
  }
}
