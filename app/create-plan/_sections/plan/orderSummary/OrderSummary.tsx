import styles from "../CreatePlanSection.module.scss";
import Button from "@/components/buttons/Button";
import OrderSummaryDetails from "./OrderSummaryDetails";
import { useContext, useState } from "react";
import { PlanContext } from "@/app/_context/planContext";
import { Step } from "@/app/_utils/types";
import OrderSummaryModal from "./OrderSummaryModal";

const OrderSummary = () => {
  const { selectedOptions } = useContext(PlanContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const isCapsule = selectedOptions[Step.BrewMethod] === "Capsule";

  const hasBrewMethod = Boolean(selectedOptions[Step.BrewMethod]);
  const hasBeanType = Boolean(selectedOptions[Step.BeanType]);
  const hasDeliveryFrequency = Boolean(selectedOptions[Step.DeliveryFrequency]);
  const hasGrindOption = Boolean(selectedOptions[Step.GrindOption]);
  const hasSize = Boolean(selectedOptions[Step.Size]);

  const areRequiredOptionsSelected = () =>
    isCapsule
      ? hasBeanType && hasSize && hasDeliveryFrequency
      : hasBrewMethod &&
        hasBeanType &&
        hasSize &&
        hasGrindOption &&
        hasDeliveryFrequency;

  return (
    <div className={styles.orderSummary}>
      <div className={`${styles.summaryContent} bg-dark`}>
        <h2
          id="order-summary-heading"
          className={`${styles.heading} uppercase`}
        >
          Order Summary
        </h2>
        <OrderSummaryDetails />
      </div>
      <Button onClick={openModal} disabled={!areRequiredOptionsSelected()}>
        Create my plan!
      </Button>
      <OrderSummaryModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default OrderSummary;
