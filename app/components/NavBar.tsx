
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-8 flex flex-row justify-center place-items-center bg-white text-black">
      <ul>
        <li className="flex flex-row gap-4">
          <Link href={"./"}>Home</Link>
          <Link href={"./"}>Search</Link>
        </li>
      </ul>
    </div>
  );
}
