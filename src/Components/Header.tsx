import Link from "next/link";

export default function Header() {
  return (
    <div className="min-h-[20vh] min-w-full bg-black flex flex-row justify-between">
      <h1 className="m-5">HOME PAGE</h1>
      <div>
        <Link href="/animals">ANIMALS</Link>
        <Link href="/games">GAMES</Link>
      </div>
    </div>
  );
}
