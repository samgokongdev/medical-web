import Image from "next/legacy/image";
import React from "react";

export default function About() {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      <div className="hidden"></div>

      <div className="w-full lg:w-1/2">
        <div className="">
          <div className="relative w-full h-96">
            <Image
              src="/doctor2.png"
              alt="doctor"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="">
          <div className="flex flex-col text-heading2 font-semibold justify-center">
            <h1 className="">ABOUT US</h1>
            <hr className="mt-4 bg-gray-200 border-2 border-primary w-1/4 lg:w-1/6" />
            <p className="text-[14px] leading-[26px] tracking-wider text-textp/60">
              We are a website that provides services in the health sector, you
              can consult about your health, find a doctor according to your
              disease, or find the nearest hospital. You also get the latest
              articles about the world of health and interesting health tips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
