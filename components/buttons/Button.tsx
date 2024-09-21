"use client";

import { ReactNode } from "react";
import styles from "./Buttons.module.scss";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ children, onClick, disabled = false }: ButtonProps) => (
  <button
    className={`${styles.btn} bg-primary ff-serif`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
