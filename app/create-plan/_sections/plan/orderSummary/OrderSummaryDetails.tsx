import { useContext } from "react";
import { PlanContext } from "@/app/_context/planContext";
import { Step } from "@/app/_utils/types";
import styles from "../CreatePlanSection.module.scss";

type OrderSummaryDetailsProps = {
  fontColour?: "light" | "neutral";
};
const OrderSummaryDetails = ({
  fontColour = "light",
}: OrderSummaryDetailsProps) => {
  const { selectedOptions } = useContext(PlanContext);
  const {
    [Step.BrewMethod]: brewMethod = "_____",
    [Step.BeanType]: beanType = "_____",
    [Step.Size]: size = "_____",
    [Step.GrindOption]: grindOption = "_____",
    [Step.DeliveryFrequency]: deliveryFrequency = "_____",
  } = selectedOptions || {};
  const isCapsule = brewMethod === "Capsule";

  return (
    <p
      className={`${styles.summaryDetails} text-${fontColour} ff-serif fs-450`}
    >
      “I drink my coffee using <span>{brewMethod}</span>, with a{" "}
      <span>{beanType}</span> type of bean. <span>{size}</span>
      {!isCapsule && (
        <>
          {" "}
          ground ala <span>{grindOption}</span>
        </>
      )}
      , sent to me <span>{deliveryFrequency}</span>.”
    </p>
  );
};

export default OrderSummaryDetails;
