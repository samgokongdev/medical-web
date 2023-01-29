import Header from "@/components/header";
import HeaderMob from "@/components/header-mobile";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Consultation from "../components/consultation";
import Smile from "../components/smile";
export default function Home() {
  return (
    <main className="pt-8 px-6 lg:px-2 font-sans">
      <div className="container">
        <Navbar />
        <Header />
        <HeaderMob />
      </div>
    </main>
  );
}
