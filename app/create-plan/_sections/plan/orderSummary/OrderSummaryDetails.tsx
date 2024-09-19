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
  const {
    selectedOptions: {
      [Step.BrewMethod]: brewMethod = "_____",
      [Step.BeanType]: beanType = "_____",
      [Step.Size]: size = "_____",
      [Step.GrindOption]: grindOption = "_____",
      [Step.DeliveryFrequency]: deliveryFrequency = "_____",
    } = {},
  } = useContext(PlanContext);

  const isCapsule = brewMethod === "Capsule";
  const isCafetiere = grindOption === "Cafetiére";

  return (
    <p
      className={`${styles.summaryDetails} text-${fontColour} ff-serif fs-450`}
    >
      “I drink my coffee using <span>{brewMethod}</span>, with a{" "}
      <span>{beanType}</span> type of bean. <span>{size}</span>
      {!isCapsule && (
        <span>
          {isCafetiere && (
            <span className={styles.unhighlighted}> ground ala</span>
          )}{" "}
          <span>{grindOption}</span>
        </span>
      )}
      , sent to me <span>{deliveryFrequency}</span>.”
    </p>
  );
};

export default OrderSummaryDetails;
