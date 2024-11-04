import Image from "next/image";
import React from "react";

export const ImagesSection = () => {
  return (
    <div className="flex flex-wrap mt-20 justify-center gap-4">
      <div className="w-1/2">
        <Image
          src={"/images/image1.jpg"}
          alt={"image1"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
      <div className="w-2/5">
        <Image
          src={"/images/image2.jpg"}
          alt={"image2"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
      <div className="w-2/5">
        <Image
          src={"/images/image3.jpg"}
          alt={"image3"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
      <div className="w-1/2">
        <Image
          src={"/images/image7.jpg"}
          alt={"image4"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
      <div className="w-3/4 max-w-xs">
        <Image
          src={"/images/image5.jpg"}
          alt={"image5"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
    </div>
  );
};
