"use client";

import { PlanProvider } from "../_context/planContext";
import HeroSection from "./_sections/hero/HeroSection";
import Instructions from "./_sections/instructions/Instructions";
import CreatePlanSection from "./_sections/plan/CreatePlanSection";
import OrderSummaryModal from "./_sections/plan/orderSummary/OrderSummaryModal";

const CreatePlanClient = () => {
  return (
    // <>
    <PlanProvider>
      <main id="main-content" className="container">
        <HeroSection />
        <Instructions />
        <CreatePlanSection />
      </main>
      <OrderSummaryModal />
    </PlanProvider>
    // </>
  );
};

export default CreatePlanClient;
