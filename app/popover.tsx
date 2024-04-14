import React from "react";
import Image from "next/image";

const Popover = () => {
  return (
    <div>
      <div className="relative top-0 left-[33%] -translate-y-[1420px] w-[550px]  bg-white shadow-2xl shadow-red/25">
        <div className="flex flex-row justify-between items-center px-12 py-8">
          <div className="flex flex-col gap-7">
            <Image src="/barbell.svg" alt="barbell" width={45} height={45} />
            <p className="uppercase font-bold">weights</p>
          </div>
          <div className="flex flex-col gap-4">
            <Image src="/crossfit.svg" alt="crossfit" width={40} height={40} />
            <p className="uppercase font-bold">cross-fit</p>
          </div>
          <div className="flex flex-col gap-3">
            <Image src="/yoga.svg" alt="yoga" width={35} height={35} />
            <p className="uppercase font-bold">yoga</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popover;
