import {
  ArrowUpRight,
  FileText,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { SVGProps } from "react";

/* Official GitHub mark (Simple Icons geometry) — reads cleanly down to 20px. */
export function GithubBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

/* Official "in" letterform, containerless so it pairs with the GitHub mark. */
export function LinkedinBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
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
