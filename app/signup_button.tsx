import React from "react";
import { Saira_Condensed } from "next/font/google";

const sairaCondensed = Saira_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const SignUpButton = () => {
  return (
    <button
      className={`${sairaCondensed.className} bg-red hover:bg-red/50 w-[100px] h-[40px] text-white text-base py-2 px-6`}
    >
      Sign Up
    </button>
  );
};

export default SignUpButton;
