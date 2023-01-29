"use client";
import React from "react";
import Image from "next/image";
import { useRef } from "react";
import Consultation from "./consultation";
import Smile from "./smile";

export default function HeaderMob() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <section className="lg:hidden flex flex-col pt-8">
      <div className="w-full">
        <div className="relative">
          {/* <div className="bg-white shadow-md absolute -top-40 -right-10 z-20 px-[24px] py-[20px] rounded-xl">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
