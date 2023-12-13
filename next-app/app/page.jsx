//server component for useState and useEffect
"use client";

// import { ReduxProvider } from "@/redux/provider";
import Link from "next/link";
export default function Home() {
  return (
    <ReduxProvider>
      <main>
        <h1>HELLO WORLD</h1>

        <Link href="/admin">Users</Link>
      </main>
    </ReduxProvider>
  );
}
