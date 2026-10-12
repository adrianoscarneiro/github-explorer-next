"use client";
import Link from "next/link";
import "./Navbar.css";

//Adicionar o Toggle que ja esta pronto para alterar o tema do projeto

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="nav"
    >
        <div className="nav__content">
          <img className="nav__logo" height={30} width={30} src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
          <ul className="nav__menu">
            <li className="nav__items">
              <Link href={"./"}>Home</Link>
              <Link href={"./"}>Search</Link>
            </li>
          </ul>
        </div>
      
    </nav>
  );
}
