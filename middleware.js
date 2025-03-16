import { NextResponse } from "next/server.js";

export function middleware(req) {
  const url = req.nextUrl;
  const devMode = req.cookies.get("devMode"); // เช็ค Cookie

  if (process.env.MAINTENANCE_MODE === "true" && devMode !== "yes") {
    console.log('go to SOON');
    return NextResponse.rewrite(new URL("/coming-soon", req.url));
  }else{
    console.log('goto real'); 
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
