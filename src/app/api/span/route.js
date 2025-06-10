import * as Sentry from "@sentry/nextjs";
import { NextResponse } from "next/server";

export async function GET() {
  const span = Sentry.startSpanManual({
    name: "something",
    op: "tRPC",
  });
  // span.end();
  // try {
  //   console.log("Starting API route span...");
  //   await Sentry.startSpanManual(
  //     {
  //       name: "test",
  //       // test: "test",
  //       op: "tRPC",
  //       attributes: {
  //         some: "attribute",
  //         component: "rpc",
  //       },
  //       // attributes: {
  //       //   some: "attribute",
  //       //   component: "rpc",
  //       // },
  //     },
  //     (span) => {
  //       return new Promise((resolve, reject) => {
  //         try {
  //           console.log("Inside span, throwing test error...");
  //           throw new Error("This is a test error from API route");
  //         } catch (error) {
  //           console.log("Error caught in span, sending to Sentry...");
  //           Sentry.captureException(error);
  //           reject(error);
  //         } finally {
  //           console.log("Ending span...");
  //           span.end();
  //         }
  //       });
  //     }
  //   );

  //   return NextResponse.json({ message: "API route executed successfully" });
  // } catch (error) {
  //   console.error("API route error:", error);
  //   Sentry.captureException(error);
  //   return NextResponse.json(
  //     { message: "Error in API route" },
  //     { status: 500 }
  //   );
  // }
}
