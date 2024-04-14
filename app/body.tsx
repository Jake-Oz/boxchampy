import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import SignUpButton from "./signup_button";

const inter = Inter({ subsets: ["latin"] });

const Body = () => {
  return (
    <section className="grid grid-cols-2 gap-12 pl-40">
      <div className=" relative h-[500px] w-[560px]">
        <Image
          src="/Girl fight.jpg"
          alt="Girl Fight"
          fill
          className="object-cover"
        />
      </div>
      <div className="pr-40 space-y-4 flex flex-col justify-center">
        <div className="border-l-8 border-l-red">
          <h2 className="text-5xl font-bold uppercase ml-4">Fight like</h2>
          <h2 className="text-5xl font-bold uppercase ml-4">a champion</h2>
        </div>
        <div
          className={`${inter.className} text-base text-gray font-bold space-y-4`}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nunc at aliquet lacinia, nisl justo tincidunt nunc, vitae
            luctus nunc nunc id nunc. Sed nec semper nunc. Nulla facilisi. Sed
            auctor, nunc non tincidunt tincidunt, nunc nunc tincidunt nunc,
            vitae luctus nunc nunc id nunc.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nunc at aliquet lacinia, nisl justo tincidunt nunc, vitae
            luctus nunc nunc id nunc. Sed nec semper nunc. Nulla facilisi.
          </p>
          <SignUpButton />
        </div>
      </div>
    </section>
  );
};

export default Body;
