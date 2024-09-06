"use client";
import { useState } from "react";
import OptionCard from "./OptionCard";
import styles from "./OptionCards.module.scss";

export type OptionCardData = {
  title: string;
  content: string;
};

type OptionCardsProps = {
  options: OptionCardData[];
};

const OptionCards = ({ options }: OptionCardsProps) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleSelect = (title: string) => {
    setSelectedCard(title);
  };

  return (
    <div className={styles.cardsContainer}>
      {options.map((option) => (
        <OptionCard
          key={option.title}
          title={option.title}
          content={option.content}
          isSelected={selectedCard === option.title}
          onSelect={() => handleSelect(option.title)}
        />
      ))}
    </div>
  );
};

export default OptionCards;
