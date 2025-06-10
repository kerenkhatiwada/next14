import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
// https://github.com/Fwang36/nextjs14
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
        <Link href="/about">Go to About Page Client</Link>
        <br />
        <Link href="/api/data">Go to API Route Server</Link>
      </div>
    </main>
  );
}
