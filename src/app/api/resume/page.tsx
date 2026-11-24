import type { Metadata } from "next";
import { resumeUrl } from "@/data/contact";

export const metadata: Metadata = {
  title: "Résumé | Maneesha Barandeniya",
  robots: { index: false, follow: false },
};

export default function ResumeRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${resumeUrl}`} />
      <p><a href={resumeUrl}>Open Maneesha’s résumé</a></p>
    </>
  );
}
