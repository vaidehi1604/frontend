import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>HELLO WORLD</h1>

      <Link href="/users">Users</Link>
    </main>
  );
}
