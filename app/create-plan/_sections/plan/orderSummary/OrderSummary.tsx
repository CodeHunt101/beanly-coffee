import styles from "./CreatePlanSection.module.scss";
import Button from "@/components/buttons/Button";
import OrderSummaryDetails from "./OrderSummaryDetails";

const OrderSummary = () => {
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
      <Button onClick={() => null}>Create my plan!</Button>
    </div>
  );
};

export default OrderSummary;
