import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-row ">
      <div className="relative z-10">
        <h1 className=" text-white">Fight like</h1>
        <h1 className="text-white text-nowrap">
          a <span className="text-red">champion</span>{" "}
        </h1>
      </div>
      <Image
        src="/Boy fight.jpg"
        alt="Image"
        width={1440}
        height={559}
        className="-translate-x-48 -translate-y-32"
      />
    </div>
  );
};

export default Hero;
