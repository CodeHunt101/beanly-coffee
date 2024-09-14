import styles from "./OptionCards.module.scss";

type OptionCardProps = {
  title: string;
  content: string;
  isSelected: boolean;
  onSelect: () => void;
};

const OptionCard = ({
  title,
  content,
  isSelected,
  onSelect,
}: OptionCardProps) => {
  return (
    <button
      role="tab"
      className={`${styles.btn} ${isSelected ? styles.selected : ""} bg-muted text-dark`}
      onClick={onSelect}
    >
      <h4 className={`${styles.btnTitle} fs-400 ff-serif`}>{title}</h4>
      <p className={`${styles.btnContent} lh-300`}>{content}</p>
    </button>
  );
};

export default OptionCard;
