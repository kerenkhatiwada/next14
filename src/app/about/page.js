// app/about.js
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import * as Sentry from "@sentry/nextjs";

export default function AboutPage() {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/data");
        const data = await response.json();
        setApiResponse(data.message);
      } catch (error) {
        console.error("Failed to fetch API data:", error);
        setApiResponse("Failed to fetch some data");
      }
    }

    fetchData();
  }, []);

  const throwError = () => {
    try {
      throw new Error("This is a test error from about page");
    } catch (error) {
      console.log("error", error);
      Sentry.captureException(error);
      // console.error("Button click error:", error);
    }
    // throw new Error("This is a test error from about page");
    // Sentry.captureMessage("This is a test message from about page");
  };

  return (
    <div>
      <h1>About Us</h1>
      <button onClick={throwError}>Throw Error</button>

      <p>Welcome to the About page!</p>
      <p>API Response: {apiResponse || "Loading..."}</p>
      <Link href="/">Go home</Link>
    </div>
  );
}
