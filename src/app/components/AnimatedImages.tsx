/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect, useState } from "react";

import styles from "../styles/AnimatedImages.module.css";

export const AnimatedImages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={styles.imagesSection}>
      <img
        src="/images/image2.png"
        alt="image 2"
        className={`${isVisible ? styles.slideInFromLeft : ""}`}
      />
      <img
        src="/images/image4.jpg"
        alt="image 4"
        className={`${isVisible ? styles.slideInFromRight : ""}`}
      />
    </div>
  );
};
