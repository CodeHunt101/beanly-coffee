"use client";

import HeroSection from "../_sections/hero/HeroSection";
import Instructions from "./_sections/instructions/Instructions";
import CreatePlanSection from "./_sections/plan/CreatePlanSection";

const CreatePlanClient = () => {
  return (
    <main>
      <HeroSection />
      <Instructions />
      <CreatePlanSection />
    </main>
  );
};

export default CreatePlanClient;
