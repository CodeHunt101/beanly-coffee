"use client";

import styles from "./Button.module.scss";

type ButtonProps = {
  content: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ content, onClick, disabled = false }: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} bg-primary ff-serif text-background`}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
