import Link from "next/link";
import Button from "./Button";

export default function Home() {
  return (
    <nav
      aria-label="Main navigation"
      className="w-full h-8 grid grid-cols-1 items-center bg-white text-black px-4"
    >
      <ul>
        <li className="flex flex-row gap-4 justify-self-center">
          <Link href={"./"}>Home</Link>
          <Link href={"./"}>Search</Link>
        </li>
      </ul>
    </nav>
  );
}
