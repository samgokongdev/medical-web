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
        <HeaderMob />

        <section className="pt-[140px]">
          <div className="flex flex-col text-heading2 font-semibold justify-center">
            <h1 className="text-center">OUR SERVICES</h1>
            <hr className="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700" />
          </div>
        </section>
      </div>
    </main>
  );
}
