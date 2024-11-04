import React from "react";

import { VerticalLine } from "./shared/VerticalLine";
import styles from "../styles/LoveStorySection.module.css";

export const LoveStorySection = () => {
  return (
    <div className={styles.loveStorySection}>
      <span>LOVE STORY</span>
      <VerticalLine bgColor={"[#333333]"} margin="mb-4" />
    </div>
  );
};
