import About from "@/components/about";
import Header from "@/components/header";
import HeaderMob from "@/components/header-mobile";
import Navbar from "@/components/navbar";
import Oursevices from "@/components/oursevices";
import Image from "next/legacy/image";
import Consultation from "../components/consultation";
import Smile from "../components/smile";
export default function Home() {
  return (
    <main className="pt-8 px-6 lg:px-2 font-sans">
      <div className="container">
        <Navbar />
        <HeaderMob />
        <Oursevices />
        <About />
      </div>
    </main>
  );
}
