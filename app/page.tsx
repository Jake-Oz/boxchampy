import { Saira_Condensed } from "next/font/google";
import Header from "./header";
import Hero from "./hero";
import Footer from "./footer";
import Body from "./body";
import Popover from "./popover";

const sairaCondensed = Saira_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className={sairaCondensed.className}>
      <div className="font-bold text-[130px] uppercase leading-[90%] bg-gradient-to-r from-black to-image/90 h-[560px] px-40 [clip-path:polygon(0_0,_100%_0,_100%_65%,_0_100%)] overflow-hidden py-10">
        <Header />
        <Hero />
      </div>
      <div className="h-[870px] flex flex-col justify-center">
        <Body />
      </div>
      <Footer />
      <Popover />
    </div>
  );
}
