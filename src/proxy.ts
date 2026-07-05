import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function unauthorized(message = "Authentication required") {
  return new NextResponse(message, {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Portfolio CMS", charset="UTF-8"',
    },
  });
}

function timingSafeEqual(first: string, second: string) {
  if (first.length !== second.length) return false;

  let result = 0;
  for (let index = 0; index < first.length; index += 1) {
    result |= first.charCodeAt(index) ^ second.charCodeAt(index);
  }

  return result === 0;
}

export function proxy(request: NextRequest) {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.next();
    }

    return new NextResponse(
      "CMS access is disabled until ADMIN_USERNAME and ADMIN_PASSWORD are configured.",
      { status: 503 },
    );
  }

  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) return unauthorized();

  let providedUsername = "";
  let providedPassword = "";

  try {
    const decoded = atob(authHeader.slice(6));
    const separatorIndex = decoded.indexOf(":");
    if (separatorIndex === -1) return unauthorized("Invalid credentials");
    providedUsername = decoded.slice(0, separatorIndex);
    providedPassword = decoded.slice(separatorIndex + 1);
  } catch {
    return unauthorized("Invalid credentials");
  }

  if (
    !timingSafeEqual(providedUsername ?? "", username) ||
    !timingSafeEqual(providedPassword ?? "", password)
  ) {
    return unauthorized("Invalid credentials");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
