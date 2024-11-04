import React from "react";

import { RemainingTime } from "../types";
import { useCalculateDate } from "../hooks/useCalculateDate";
import styles from "../styles/WaitingForYouSection.module.css";

export const WaitingForYouSection = () => {
  const date = new Date(2025, 0, 11);
  const { remainingDays, remainingHours, remainingMinutes, remainingSeconds } =
    useCalculateDate(date);

  const remainingTime: RemainingTime[] = [
    {
      timeUnit: remainingDays,
      label: "Օր",
    },
    {
      timeUnit: remainingHours,
      label: "Ժամ",
    },
    {
      timeUnit: remainingMinutes,
      label: "Րոպե",
    },
    {
      timeUnit: remainingSeconds,
      label: "Վայրկյան",
    },
  ];

  return (
    <div className={styles.waitingForYouSection}>
      <span className={styles.waitingForYouText}>
        Սպասում ենք Ձեզ մեր հարսանիքին
      </span>
      <div className={styles.date}>
        <span>11</span>
        <span>01</span>
        <span>25</span>
      </div>
      <div className={styles.verticalLine} />
      <div className={styles.remainingTimeSection}>
        <span>ՄՆԱՑ</span>
        <div className="flex gap-4">
          {remainingTime.map((value, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col justify-center items-center">
                <span className="text-4xl">{value.timeUnit}</span>
                <span>{value.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
