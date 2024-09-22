import { PlanContext } from "@/app/_context/planContext";
import { useContext } from "react";
import { calculatePrice } from "../helpers/utils";
import Modal from "@/components/modal/Modal";
import styles from "./OrderSummaryModal.module.scss";
import OrderSummaryDetails from "./OrderSummaryDetails";
import Price from "./Price";
import Button from "@/components/buttons/Button";

const OrderSummaryModal = () => {
  const { selectedOptions, isModalOpen, openModal } = useContext(PlanContext);
  const handleOpenModal = () => openModal(false);

  const price = calculatePrice(selectedOptions);
  return (
    <Modal isOpen={isModalOpen} onClose={handleOpenModal}>
      <div className={styles.modalContent}>
        <div className={styles.modalTitleWrapper}>
          <h2 className="ff-serif">Order Summary</h2>
        </div>
        <div className={styles.modalDescription}>
          <OrderSummaryDetails fontColour="neutral" />
          <small>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Remember, this is a demo website, so
            there is not an actual checkout. 😁{" "}
          </small>
        </div>
        <div className={`${styles.modalCheckout} ff-serif`}>
          <Price priceValue={price} />
          <Button onClick={handleOpenModal}>
            Close <Price prefix="-" priceValue={price} />
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default OrderSummaryModal;
