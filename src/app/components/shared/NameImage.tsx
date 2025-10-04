import React from "react";
import styles from "../../styles/NameImage.module.css";

export const NameImage = () => {
  return (
    <div className={styles.container}>
      <span className={styles.ampersandSection}>&</span>
      <div className={styles.namesSection}>
        <span>Artak</span>
        <span>Ashkhen</span>
      </div>
    </div>
  );
};
