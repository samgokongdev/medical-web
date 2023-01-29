import Image from "next/image";
import React from "react";
import Consultation from "./consultation";
import Smile from "./smile";

export default function Header() {
  return (
    <section className="hidden lg:flex lg:flex-row pt-28 space-x-11 lg:items-center">
      <div className="lg:w-1/2">
        <p className="text-[50px] leading-[64px] tracking-[0.06em] text-textp font-bold">
          Your Health, Our <br />
          Happiness
        </p>
        <p className="pt-[29px] pb-[50px] leading-[26px] tracking-[0.04em] text-textp/50 text-[12px]">
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
        <div className="relative">
          {/* <Image
            src="/header-bg.svg"
            alt="yuhuu"
            width={662}
            height={548}
            className="w-[662px] h-[548px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
          /> */}
          <Image
            src="/doctor2.png"
            alt="yuhuu"
            width={324}
            height={431}
            className="w-auto h-[400px] absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10"
          />
          <div className="bg-white shadow-md absolute -top-40 -right-10 z-20 px-[24px] py-[20px] rounded-xl">
            <span className="flex flex-row items-center space-x-4">
              <Consultation />
              <p className="text-[16px] leading-[64px] tracking-[0.06em] font-semibold text-textp">
                Consultation
              </p>
            </span>
            <p className="text-[12.5px] leading-[20px] tracking-[0.04em] text-textp/40">
              Consultation with the best
            </p>
          </div>
          <div className="bg-white shadow-md absolute  z-20 px-[24px] py-[20px] rounded-xl">
            <span className="flex flex-row items-center space-x-4">
              <Smile />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
