/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { NameImage } from "./shared/NameImage";

import styles from "../styles/HeroSection.module.css";

export const HeroSection = () => {
  const [actionButton, setActionButton] = useState("/images/playButton.svg");
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlayPause = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setActionButton("/images/playButton.svg");
    } else {
      audio.play();
      setActionButton("/images/stopButton.svg");
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audioInstance = new Audio("/sounds/music.mp3");
    setAudio(audioInstance);

    return () => {
      audioInstance.pause();
    };
  }, []);

  return (
    <div className={styles.primaryContainer}>
      <div className={styles.titleSection}>
        <button className={styles.playButton} onClick={handlePlayPause}>
          <img src={actionButton} alt="action button" width={38} height={38} />
        </button>
        <span className="text-center">
          ՀԱՐՍԱՆՅԱՑ <br /> ՀՐԱՎԻՐԱՏՈՄՍ
        </span>
      </div>
      <div className="w-full flex overflow-hidden">
        <div className={styles.dateSection}>
          <span>26</span>
          <span>10</span>
          <span>25</span>
        </div>
        <NameImage />
      </div>
    </div>
  );
};
