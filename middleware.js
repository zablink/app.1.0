import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const devMode = req.cookies.get("devMode"); // เช็ค Cookie

  if (process.env.MAINTENANCE_MODE === "true" && devMode !== "yes") {
    return NextResponse.rewrite(new URL("/coming-soon", req.url));
  }
  return NextResponse.next();
}
