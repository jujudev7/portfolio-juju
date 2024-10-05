// cors.ts
import { NextResponse } from "next/server";

const allowedOrigins = ["https://julienpenna.com"];

export function cors(req: Request) {
  const origin = req.headers.get("origin");

  if (allowedOrigins.includes(origin as string)) {
    return NextResponse.next().headers.append(
      "Access-Control-Allow-Origin",
      origin
    );
  }

  return NextResponse.next(); // continuez sans autoriser CORS
}
