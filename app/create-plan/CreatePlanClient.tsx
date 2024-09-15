"use client";

import { PlanProvider } from "../_context/planContext";
import HeroSection from "./_sections/hero/HeroSection";
import Instructions from "./_sections/instructions/Instructions";
import OrderSummary from "./_sections/plan/orderSummary/OrderSummary";
import CreatePlanSection from "./_sections/plan/CreatePlanSection";

const CreatePlanClient = () => {
  return (
    <main className="container">
      <PlanProvider>
        <HeroSection />
        <Instructions />
        <CreatePlanSection />
      </PlanProvider>
    </main>
  );
};

export default CreatePlanClient;
