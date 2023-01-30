import React from "react";
import Image from "next/legacy/image";
import Consultation from "./consultation";
import Smile from "./smile";

export default function HeaderMob() {
  return (
    <section className="flex flex-col lg:flex-row pt-8 lg:pt-28">
      <div className="lg:w-1/2 hidden lg:flex lg:flex-col">
        <p className="text-heading1 text-textp font-bold lg:text-[48px]">
          Your Health,
          <br />
          Our Happiness
        </p>
        <p className="pt-[29px] pb-[50px] text-textp/50 text-subheading1">
          In the new normal era like now, your health is very important,
          especially the Covid-19 cases are increasing every day. therefore your
          health, happiness for medical personnel.
        </p>
        <div className="flex">
          <button className="py-[16px] px-[34px] bg-primary text-white rounded-full font-semibold text-[15px] leading-[28px]">
            Get Appointment
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <div className="relative w-full h-96">
          <Image
            src="/doctor2.png"
            alt="yuhuu"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="w-full text-center lg:hidden">
        <p className="text-[32px] leading-[44px] tracking-[0.06em] text-textp font-bold ">
          Your Health, <br />
          Our Happiness
        </p>
        <p className="pt-[22px] pb-[35px] leading-[24px] text-textp/60 text-[14px]">
          In the new normal era like now, your health is very important,
          especially the Covid-19 cases are increasing every day. therefore your
          health, happiness for medical personnel.
        </p>
        <div className="flex justify-center">
          <button className="py-[14px] px-[28px] bg-primary text-white rounded-full font-semibold text-[12px] leading-[24px]">
            Get Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
