import { useContext } from "react";
import styles from "./CreatePlanSection.module.scss";
import { PlanContext } from "@/app/_context/planContext";
import { Step } from "@/app/_utils/types";
import Button from "@/components/buttons/Button";

const OrderSummary = () => {
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
    <div className={styles.orderSummary}>
      <div className={`${styles.summaryContent} bg-dark`}>
        <h2
          id="order-summary-heading"
          className={`${styles.heading} uppercase`}
        >
          Order Summary
        </h2>
        <p className={`${styles.summaryDetails} text-light ff-serif fs-450`}>
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
      </div>
      <Button onClick={() => null}>Create my plan!</Button>
    </div>
  );
};

export default OrderSummary;
