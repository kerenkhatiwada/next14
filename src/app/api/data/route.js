// pages/api/data

//go to http://localhost:3000/api/data
import { NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";
export async function GET() {
  console.log("before captueException");
  Sentry.captureException(new Error("testing api error"));
  console.log("after captueException");
  // Sentry.startSpan(
  //   {
  //     op: "rootSpan",
  //     name: "backend profile",
  //   },
  //   () => {
  //     // Any code in this callback will be profiled.
  //   }
  // );

  return NextResponse.json({
    message: "Hello, this is your current API response!",
  });
}
