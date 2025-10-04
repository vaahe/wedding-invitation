import Image from "next/image";
import Link from "next/link";
import React from "react";

export const WeddingSection = () => {
  return (
    <div className="flex flex-col text-xl gap-2 items-center">
      <Image
        src={"/images/rings.svg"}
        alt={"brides house"}
        width={64}
        height={64}
      />
      <span>ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ</span>
      <span className="font-bold text-3xl">14:00</span>
      <span className="text-3xl font-bold">Սբ․ Գայանե</span>
      <span>ք․ Էջմիածին</span>
      <div className="w-[256px] h-[256px] relative">
        <Image
          src={"/images/church.jpg"}
          alt="church"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <Link
        href="https://yandex.com/maps/org/225773844967/?ll=44.312119%2C40.146045&z=12.83"
        target="_blank"
      >
        <button className="transition-all duration-300 ease-in-out border-black border hover:bg-slate-600 hover:text-white hover:border-slate-600 rounded-3xl px-8 py-3 mt-4 text-sm">
          ԻՆՉՊԵ՞Ս ՀԱՍՆԵԼ
        </button>
      </Link>
    </div>
  );
};
