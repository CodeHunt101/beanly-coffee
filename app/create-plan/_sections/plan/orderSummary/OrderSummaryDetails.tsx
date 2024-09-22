import { useContext, useMemo } from "react";
import { PlanContext } from "@/app/_context/planContext";
import { Step } from "@/app/_utils/types";
import styles from "./OrderSummaryDetails.module.scss";

const OrderSummaryDetails = ({ fontColour = "light" }) => {
  const { selectedOptions } = useContext(PlanContext);

  const defaultOptions = {
    [Step.BrewMethod]: "_____",
    [Step.BeanType]: "_____",
    [Step.Size]: "_____",
    [Step.GrindOption]: "_____",
    [Step.DeliveryFrequency]: "_____",
  };

  // Memoize the merged options to avoid recalculation on each render
  const options = useMemo(
    () => ({
      ...defaultOptions,
      ...selectedOptions,
    }),
    [selectedOptions],
  );

  const {
    [Step.BrewMethod]: brewMethod,
    [Step.BeanType]: beanType,
    [Step.Size]: size,
    [Step.GrindOption]: grindOption,
    [Step.DeliveryFrequency]: deliveryFrequency,
  } = options;

  const isCapsule = brewMethod === "Capsule";
  const isCafetiere = grindOption === "Cafetiére";

  const renderGrindOption = !isCapsule && (
    <span>
      {isCafetiere && <span className={styles.unhighlighted}> ground ala</span>}{" "}
      <span>{grindOption}</span>
    </span>
  );

  const brewMethodText = isCapsule ? `${brewMethod}s` : brewMethod;

  return (
    <p
      aria-live="polite"
      className={`${styles.summaryDetails} text-${fontColour} ff-serif fs-450`}
    >
      "I drink my coffee {isCapsule ? "using" : "as"}{" "}
      <span>{brewMethodText}</span>, with a <span>{beanType}</span> type of
      bean. <span>{size}</span>
      {renderGrindOption}, sent to me <span>{deliveryFrequency}</span>."
    </p>
  );
};

export default OrderSummaryDetails;
