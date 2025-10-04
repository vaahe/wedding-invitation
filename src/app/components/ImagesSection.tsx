import Image from "next/image";
import React from "react";

export const ImagesSection = () => {
  return (
    <div className="flex flex-wrap mt-20 justify-center gap-4">
      <div className="w-1/2">
        <Image
          src={"/images/image1.PNG"}
          alt={"image1"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
      <div className="w-2/5 self-end">
        <Image
          src={"/images/image7.PNG"}
          alt={"image2"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
      <div className="w-2/5">
        <Image
          src={"/images/image3.JPG"}
          alt={"image3"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
      <div className="w-1/2">
        <Image
          src={"/images/image6.JPG"}
          alt={"image6"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
    </div>
  );
};
