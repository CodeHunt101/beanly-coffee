import styles from "../CreatePlanSection.module.scss";
import Button from "@/components/buttons/Button";
import OrderSummaryDetails from "./OrderSummaryDetails";
import { useContext } from "react";
import { PlanContext } from "@/app/_context/planContext";
import { Step } from "@/app/_utils/types";
import HeadingTag from "@/components/headingTag/HeadingTag";

const OrderSummary = () => {
  const { selectedOptions, openModal } = useContext(PlanContext);
  const handleOpenModal = () => openModal(true);

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
      <div className={`${styles.summaryContent} bg-darker`}>
        <HeadingTag level="h4" className={`${styles.heading} uppercase`}>
          Order Summary
        </HeadingTag>
        <OrderSummaryDetails />
      </div>
      <Button
        onClick={handleOpenModal}
        disabled={!areRequiredOptionsSelected()}
      >
        Create my plan!
      </Button>
    </div>
  );
};

export default OrderSummary;
