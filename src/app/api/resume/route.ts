import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const resumePdfPath = path.join(process.cwd(), "public", "maneesha-barandeniya.pdf");
const filename = "maneesha-barandeniya.pdf";

function contentDisposition(mode: string | null) {
  const disposition = mode === "download" ? "attachment" : "inline";

  return `${disposition}; filename="${filename}"`;
}

function pdfResponse(body: ArrayBuffer, mode: string | null) {
  return new NextResponse(body, {
    headers: {
      "Content-Disposition": contentDisposition(mode),
      "Content-Type": "application/pdf",
      "Cache-Control": "no-store",
    },
  });
}

export async function GET(request: NextRequest) {
  const mode = request.nextUrl.searchParams.get("mode");
  const resumePdf = await readFile(resumePdfPath);
  const resumeBody = resumePdf.buffer.slice(
    resumePdf.byteOffset,
    resumePdf.byteOffset + resumePdf.byteLength,
  ) as ArrayBuffer;

  return pdfResponse(resumeBody, mode);
}
