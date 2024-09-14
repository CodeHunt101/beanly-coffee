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
  id: string;
  setSelectedOption: (id: string, title: string) => void;
};

const OptionCards = ({ options, id, setSelectedOption }: OptionCardsProps) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleSelect = (title: string) => {
    setSelectedCard(title);
    setSelectedOption(id, title);
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
