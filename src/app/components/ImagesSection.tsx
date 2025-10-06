import Image from "next/image";
import React from "react";

export const ImagesSection = () => {
  return (
    <div className="flex flex-wrap mt-20 justify-center gap-4">
      <div className="w-1/2">
        <Image
          src={"/image1.png"}
          alt={"image 1"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
      <div className="w-2/5 self-end">
        <Image
          src={"/image7.png"}
          alt={"image 7"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
      <div className="w-2/5">
        <Image
          src={"/image5.jpg"}
          alt={"image 5"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
      <div className="w-1/2">
        <Image
          src={"/image6.jpg"}
          alt={"image 6"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
    </div>
  );
};
