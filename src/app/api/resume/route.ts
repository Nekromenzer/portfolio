import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const fallbackPdfPath = path.join(process.cwd(), "public", "maneesha-gimshan.pdf");
const filename = "maneesha-gimshan.pdf";

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
  const apiKey = process.env.RXRESUME_API_KEY;
  const resumeId = process.env.RXRESUME_RESUME_ID;
  const baseUrl = process.env.RXRESUME_BASE_URL ?? "https://rxresu.me";

  if (!apiKey || !resumeId) {
    const fallbackPdf = await readFile(fallbackPdfPath);
    const fallbackBody = fallbackPdf.buffer.slice(
      fallbackPdf.byteOffset,
      fallbackPdf.byteOffset + fallbackPdf.byteLength,
    ) as ArrayBuffer;

    return pdfResponse(fallbackBody, mode);
  }

  const apiUrl = new URL(
    `/api/openapi/resumes/${encodeURIComponent(resumeId)}/pdf`,
    baseUrl,
  );

  const response = await fetch(apiUrl, {
    headers: {
      "x-api-key": apiKey,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Resume PDF could not be fetched." },
      { status: response.status },
    );
  }

  return pdfResponse(await response.arrayBuffer(), mode);
}
