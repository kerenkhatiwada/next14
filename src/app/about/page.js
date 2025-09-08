// app/about.js
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

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

  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to the About page!</p>
      <p>API Response: {apiResponse || "Loading..."}</p>
      <Link href="/">Go home</Link>
      <br />
      <Link href="/sentry-example-page">Test Sentry Integration</Link>
    </div>
  );
}
