import { env } from "~/env";
import { NextResponse } from "next/server";

export async function GET() {
  // Only show this in development or when explicitly requested
  if (env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not available in production" }, { status: 403 });
  }
  
  return NextResponse.json({
    NODE_ENV: env.NODE_ENV,
    COMING_SOON_MODE: env.COMING_SOON_MODE,
    raw_env: process.env.COMING_SOON_MODE,
  });
}