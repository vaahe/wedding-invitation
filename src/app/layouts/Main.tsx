"use client";

import React from "react";

import { DayPlan } from "../components/DayPlan";
import { ImagesSection } from "../components/ImagesSection";
import { AnimatedImages } from "../components/AnimatedImages";
import { WeddingSection } from "../components/WeddingSection";
import { ConfirmPresence } from "../components/ConfirmPresence";
import { WeddingCeremonySection } from "../components/WeddingCeremonySection";

import styles from "../styles/Header.module.css";
import { HeroSection } from "../components/HeroSection";
import { ArrowDown } from "../components/shared/ArrowDown";
import { LoveStorySection } from "../components/LoveStorySection";
import { InvitationSection } from "../components/InvitationSection";
import { ImageContainer } from "../components/shared/ImageContainer";
import { WaitingForYouSection } from "../components/WaitingForYouSection";

export const MainLayout = () => {
  return (
    <main className={styles.header}>
      <HeroSection />
      <ArrowDown />
      <LoveStorySection />
      <AnimatedImages />
      <div className={styles.secondaryContainer}>
        <InvitationSection />
        <WaitingForYouSection />
        <ImagesSection />
        <DayPlan />
        <WeddingSection />
        <WeddingCeremonySection />
        <ImageContainer src={"image8.jpg"} />
        <ConfirmPresence />
      </div>
    </main>
  );
};
