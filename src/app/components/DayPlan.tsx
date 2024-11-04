import React from "react";
import { VerticalLine } from "@/app/components/shared/VerticalLine";

export const DayPlan = () => {
  return (
    <div className="flex flex-col mt-20 items-center">
      <span className={"text-3xl"}>ՕՐՎԱ ԾՐԱԳԻՐԸ</span>
      <VerticalLine bgColor={"black"} margin="my-8" />
    </div>
  );
};
