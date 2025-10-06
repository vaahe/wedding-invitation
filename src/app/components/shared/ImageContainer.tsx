import Image from "next/image";
import React from "react";

interface ImageContainerProps {
  src: string;
}

export const ImageContainer: React.FC<ImageContainerProps> = ({ src }) => {
  return (
    <div className="relative px-[12px] md:w-1/2">
      <Image
        src={`/${src}`}
        alt={src}
        width={1080}
        height={1920}
        objectFit="cover"
        layout="responsive"
      />
    </div>
  );
};
