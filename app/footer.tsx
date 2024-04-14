import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer>
      <div className="bg-black px-40 py-10 h-[385px] flex flex-col justify-around ">
        <div className="flex justify-between items-center">
          <div className="uppercase text-white text-5xl font-bold">
            <h2 className="">ready for your</h2>
            <h2>
              <span className="text-red">next</span> lesson?
            </h2>
          </div>
          <div className="flex gap-8">
            <Link href="#">
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </Link>
            <Link href="#">
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </Link>
            <Link href="#">
              <Image src="/insta.svg" alt="Instagram" width={30} height={30} />
            </Link>
          </div>
        </div>
        <div className={`${inter.className} flex justify-between`}>
          <div className="flex gap-5">
            <Image src="/email.svg" alt="email" width={24} height={18} />
            <p className="text-white">jake@jakecampbell.dev</p>
          </div>
          <div className="text-white flex gap-8">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
