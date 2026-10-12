"use client";
import Link from "next/link";

//Adicionar o Toggle que ja esta pronto para alterar o tema do projeto

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="w-full h-8 grid grid-cols-1 grid-rows-1 items-center bg-card text-primary-text px-4"
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
