"use client";
import { useState } from "react";
import OptionCard from "./OptionCard";
import styles from "./OptionCards.module.scss";

export type OptionCardData = {
  optionTitle: string;
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
      {options.map(({ optionTitle, content }) => (
        <OptionCard
          key={optionTitle}
          title={optionTitle}
          content={content}
          isSelected={selectedCard === optionTitle}
          onSelect={() => handleSelect(optionTitle)}
        />
      ))}
    </div>
  );
};

export default OptionCards;
