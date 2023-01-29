import React from "react";

export default function Navbar() {
  return (
    <section className="flex flex-row justify-between items-center">
      <span className="cursor-pointer">
        <svg
          width="96"
          height="32"
          viewBox="0 0 152 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.56 12.664V35H22.08V20.472L16.096 35H12.704L6.688 20.472V35H2.208V12.664H7.296L14.4 29.272L21.504 12.664H26.56ZM37.3893 16.28V21.88H44.9093V25.432H37.3893V31.352H45.8693V35H32.9093V12.632H45.8693V16.28H37.3893ZM59.6685 12.664C62.0152 12.664 64.0738 13.1227 65.8445 14.04C67.6365 14.9573 69.0125 16.2693 69.9725 17.976C70.9538 19.6613 71.4445 21.624 71.4445 23.864C71.4445 26.104 70.9538 28.0667 69.9725 29.752C69.0125 31.416 67.6365 32.7067 65.8445 33.624C64.0738 34.5413 62.0152 35 59.6685 35H51.8605V12.664H59.6685ZM59.5085 31.192C61.8552 31.192 63.6685 30.552 64.9485 29.272C66.2285 27.992 66.8685 26.1893 66.8685 23.864C66.8685 21.5387 66.2285 19.7253 64.9485 18.424C63.6685 17.1013 61.8552 16.44 59.5085 16.44H56.3405V31.192H59.5085ZM81.198 12.664V35H76.718V12.664H81.198ZM86.4563 23.8C86.4563 21.6027 86.9469 19.64 87.9283 17.912C88.9309 16.1627 90.2856 14.808 91.9923 13.848C93.7203 12.8667 95.6509 12.376 97.7843 12.376C100.28 12.376 102.467 13.016 104.344 14.296C106.222 15.576 107.534 17.3467 108.28 19.608H103.128C102.616 18.5413 101.891 17.7413 100.952 17.208C100.035 16.6747 98.9683 16.408 97.7523 16.408C96.4509 16.408 95.2883 16.7173 94.2643 17.336C93.2616 17.9333 92.4723 18.7867 91.8963 19.896C91.3416 21.0053 91.0643 22.3067 91.0643 23.8C91.0643 25.272 91.3416 26.5733 91.8963 27.704C92.4723 28.8133 93.2616 29.6773 94.2643 30.296C95.2883 30.8933 96.4509 31.192 97.7523 31.192C98.9683 31.192 100.035 30.9253 100.952 30.392C101.891 29.8373 102.616 29.0267 103.128 27.96H108.28C107.534 30.2427 106.222 32.024 104.344 33.304C102.488 34.5627 100.302 35.192 97.7843 35.192C95.6509 35.192 93.7203 34.712 91.9923 33.752C90.2856 32.7707 88.9309 31.416 87.9283 29.688C86.9469 27.96 86.4563 25.9973 86.4563 23.8ZM127.723 30.744H118.827L117.355 35H112.651L120.683 12.632H125.899L133.931 35H129.195L127.723 30.744ZM126.507 27.16L123.275 17.816L120.043 27.16H126.507ZM143.333 31.448H150.693V35H138.853V12.664H143.333V31.448Z"
            fill="#1AB587"
          />
          <path
            d="M83.4973 3.45155C83.4893 3.36738 83.46 3.28665 83.4121 3.21694C83.3643 3.14722 83.2995 3.09083 83.2238 3.05305L79.2373 1.05305C79.168 1.01802 79.0914 0.999687 79.0137 0.999513C78.936 0.999339 78.8593 1.01733 78.7898 1.05205L74.7763 3.05205C74.6278 3.12705 74.5253 3.27055 74.5043 3.43555C74.4978 3.48405 73.9318 8.30605 78.7748 10.9395C78.8493 10.9802 78.9329 11.0011 79.0177 11.0003C79.1025 10.9995 79.1857 10.977 79.2593 10.935C83.9128 8.30555 83.5163 3.64855 83.4973 3.45155ZM79.0088 9.92355C75.5788 7.91855 75.4388 4.74755 75.4773 3.82105L79.0128 2.05955L82.5118 3.81505C82.5143 4.75005 82.2713 7.93655 79.0088 9.92355Z"
            fill="#1AB587"
          />
          <path
            d="M79.5625 4.12744H78.4375V5.4375H77.125V6.5625H78.4375V7.87257H79.5625V6.5625H80.875V5.4375H79.5625V4.12744Z"
            fill="#1AB587"
          />
        </svg>
      </span>
      <span className="cursor-pointer lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </span>
      <div className="lg:flex lg:flex-row items-center hidden lg:show">
        <div className="space-x-8 mr-[43px] text-[14px] leading-[28px] tracking-[0.06em]">
          <span className="font-semibold text-primary">Home</span>
          <span className="text-textp/30">Article</span>
          <span className="text-textp/30">Services</span>
        </div>
        <button className="py-[8px] px-[26px] border-primary border-2 text-primary rounded-full font-semibold text-[15px] leading-[28px]">
          Get Started
        </button>
      </div>
    </section>
  );
}