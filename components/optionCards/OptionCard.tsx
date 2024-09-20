import HeadingTag from "../headingTag/HeadingTag";
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
      className={`${styles.btn} ${isSelected ? styles.selected : ""} bg-muted text-dark`}
      onClick={onSelect}
    >
      <HeadingTag level="h3" className={`${styles.btnTitle} fs-400 ff-serif`}>
        {title}
      </HeadingTag>
      <p className={`${styles.btnContent} lh-300`}>{content}</p>
    </button>
  );
};

export default OptionCard;
