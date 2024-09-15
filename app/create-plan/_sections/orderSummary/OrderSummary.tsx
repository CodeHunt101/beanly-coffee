import { useContext } from "react";
import styles from "./OrderSummary.module.scss";
import { PlanContext } from "@/app/_context/planContext";
import { Step } from "@/app/_utils/types";

const OrderSummary = () => {
  const { selectedOptions } = useContext(PlanContext);
  const {
    [Step.BrewMethod]: brewMethod,
    [Step.BeanType]: beanType,
    [Step.Size]: size,
    [Step.GrindOption]: grindOption,
    [Step.DeliveryFrequency]: deliveryFrequency,
  } = selectedOptions;
  const isCapsule = brewMethod === "Capsule";

  return (
    <section
      role="region"
      aria-labelledby="order-summary-heading"
      aria-live="polite"
    >
      <h2 id="order-summary-heading" className={styles.heading}>
        Order Summary
      </h2>
      <p>
        “I drink my coffee using <span>{brewMethod}</span>, with a{" "}
        <span>{beanType}</span> type of bean.
        <span>{size}</span>
        {!isCapsule && (
          <>
            {" "}
            ground ala <span>{grindOption}</span>
          </>
        )}
        , sent to me <span>{deliveryFrequency}</span>.”
      </p>
    </section>
  );
};

export default OrderSummary;
