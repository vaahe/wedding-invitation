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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={styles.imagesSection}>
      <img
        src="/images/image2.jpg"
        alt="image 9"
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
