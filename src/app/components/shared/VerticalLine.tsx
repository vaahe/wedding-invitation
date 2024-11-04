import React from "react";

interface VerticalLineProps {
  bgColor: string;
  margin?: string;
}

export const VerticalLine: React.FC<VerticalLineProps> = ({
  bgColor,
  margin,
}) => {
  return <div className={`w-px h-[80px] bg-${bgColor} ${margin}`}></div>;
};
