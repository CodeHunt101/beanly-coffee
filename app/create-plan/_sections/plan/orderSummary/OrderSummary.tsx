import styles from "../CreatePlanSection.module.scss";
import Button from "@/components/buttons/Button";
import OrderSummaryDetails from "./OrderSummaryDetails";
import { useState } from "react";
import Modal from "@/components/modal/Modal";
import Price from "./Price";

const OrderSummary = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      <Button onClick={openModal}>Create my plan!</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.modalContent}>
          <div className={styles.modalTitleWrapper}>
            <h2 className="ff-serif">Order Summary</h2>
          </div>
          <div className={styles.modalDescription}>
            <OrderSummaryDetails fontColour="neutral" />
            <small>
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Remember, this is a demo website,
              so there is not an actual checkout. 😁{" "}
            </small>
          </div>
          <div className={`${styles.modalCheckout} ff-serif`}>
            <Price />
            <Button onClick={closeModal}>
              Close <Price prefix="-" />
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default OrderSummary;
