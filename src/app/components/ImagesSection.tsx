import Image from "next/image";
import React from "react";

interface Images {
  id: string;
  src: string;
  alt: string;
}

const images: Images[] = [
  {
    id: "sdgsd",
    src: "/images/image1.jpg",
    alt: "image 1",
  },
  {
    id: "sdgsd",
    src: "/images/image1.jpg",
    alt: "image 1",
  },
  {
    id: "sdgsfsdd",
    src: "/images/image2.jpg",
    alt: "image 2",
  },
  {
    id: "lzd;gk",
    src: "/images/image3.jpg",
    alt: "image 3",
  },
  {
    id: "dsofksd",
    src: "/images/image4.jpg",
    alt: "image 4",
  },
  {
    id: "fjkds",
    src: "/images/image5.jpg",
    alt: "image 5",
  },
];

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
          alt={"image1"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
      <div className="w-2/5">
        <Image
          src={"/images/image3.jpg"}
          alt={"image1"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
      <div className="w-1/2">
        <Image
          src={"/images/image4.jpg"}
          alt={"image1"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
      <div className="w-3/4 max-w-xs">
        <Image
          src={"/images/image5.jpg"}
          alt={"image1"}
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>
    </div>
  );
};
