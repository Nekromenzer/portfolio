import { NextResponse } from "next/server";
import { resumeUrl } from "@/data/portfolio";

export function GET() {
  return NextResponse.redirect(resumeUrl, 307);
}
