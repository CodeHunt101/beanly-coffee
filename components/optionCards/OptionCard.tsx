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
      <h4 className="fs-400">{title}</h4>
      <p className="fs-300">{content}</p>
    </button>
  );
};

export default OptionCard;
