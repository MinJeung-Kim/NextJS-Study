import { NextRequest, NextResponse } from "next/server";

// 모든 요청에 대해서 실행.
export function middleware(request: NextRequest) {
  console.log("미들웨어가 실행되고 있음! 체크중✔️ ");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("미들웨어 - 경로를 리다이렉팅함! ");
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

// 특정 경로에서만 실행.
export const config = {
    // /products/이후 모든 경로
  matcher: ["/products/:path*"],
};
