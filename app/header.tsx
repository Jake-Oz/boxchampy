import React from "react";
import Image from "next/image";
import Link from "next/link";
import SignUpButton from "./signup_button";

const Header = () => {
  return (
    <header className="relative flex flex-row justify-between items-center z-10 mb-6">
      <div className="flex justify-start items-center gap-4">
        <Image src="logo.svg" alt="Image" width={40} height={40} />
        <h2 className="uppercase text-white font-bold text-3xl">BoxChampy</h2>
      </div>
      <nav className="flex items-center justify-between gap-6">
        <Link href="#" className="text-white uppercase text-base">
          Home
        </Link>

        <Link href="#" className="text-white uppercase text-base">
          Locations
        </Link>

        <Link href="#" className="text-white uppercase text-base">
          About
        </Link>

        <Link href="#" className="text-white uppercase text-base">
          Contact
        </Link>
        <SignUpButton />
      </nav>
    </header>
  );
};

export default Header;
