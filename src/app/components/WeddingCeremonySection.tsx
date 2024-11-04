import Image from "next/image";
import Link from "next/link";
import React from "react";

export const WeddingCeremonySection = () => {
  return (
    <div className="flex flex-col text-xl my-10 gap-2 items-center">
      <Image
        src={"/images/marriageRegister.svg"}
        alt={"marriage registration"}
        width={64}
        height={64}
      />
      <span>ՀԱՐՍԱՆԵԿԱՆ ՀԱՆԴԻՍՈՒԹՅՈՒՆ</span>
      <span className="font-bold text-3xl">17:00</span>
      <span className="font-bold text-3xl text-center">
        «ԴՎԻՆ» ռեստորանային համալիր
      </span>
      <span>ք․ Էջմիածին</span>
      <Image
        src={"/images/restaurant.jpg"}
        alt="noroot"
        width={256}
        height={256}
        className="rounded-full"
      />
      <Link
        href="https://yandex.com/maps/org/215745175248/?ll=44.312119%2C40.146045&z=12"
        target="_blank"
      >
        <button className="transition-all duration-300 ease-in-out border-black border hover:bg-slate-600 hover:text-white hover:border-slate-600 rounded-3xl px-8 py-3 mt-4 text-sm">
          ԻՆՉՊԵ՞Ս ՀԱՍՆԵԼ
        </button>
      </Link>
    </div>
  );
};
