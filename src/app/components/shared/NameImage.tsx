import React from "react";
import styles from "../../styles/NameImage.module.css";

export const NameImage = () => {
  return (
    <div className={styles.container}>
      <span className={styles.ampersandSection}>&</span>
      <div className={styles.namesSection}>
        <span>Narek</span>
        <span>Anahit</span>
      </div>
    </div>
  );
};
