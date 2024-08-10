import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CardProps = {
  title: string;
  details: string;
};

const cards: CardProps[] = [
  {
    title: "SYNERGY",
    details:
      "SYNERGY is defined here as the interaction of these different streams of the Holy Spirit to produce a multiplied effect in the society greater than the sum of their individual effects. This multiplied effect is called REFORMATION!",
  },
  {
    title: "REFORMATION",
    details:
      "REFORMATION is whereby God makes a people (or person) and their way of life right from worse, corrupt, or evil state to good, blessed and prosperous state that is aligned with His original plan and purpose for them.",
  },
  {
    title: "REFORMERS",
    details:
      "In this age, God has chosen to work through His REFORMERS to influence the seven mountains of the society in Africa: Government, Religion, Family, Media, Art/Sport/Entertainment, Education, and Economy.",
  },
];

export const Goal: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setExpandedCard(index);
  };

  const handleMouseLeave = () => {
    setExpandedCard(null);
  };

  return (
    <div className="min-h-[500px] bg-[#3C3C3E] flex flex-col items-center justify-center text-white p-8">
      <div className="flex flex-col items-center text-center max-w-[1100px]">
        <h1 className="md:text-[80px] text-lg py-4 font-bold mb-4">
          Our Goal - Our Vision
        </h1>
        <p className="text-2xl mb-8 text-center mt-4">
          By the Holy Spirit, is to create a SYNERGY of the Word of Faith, and
          the Apostolic, Prophetic, and Prayer streams to raise REFORMERS to
          influence society every day in Africa.
        </p>
      </div>
      <div className="w-full max-w-5xl mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative p-6 text-center bg-white rounded-lg shadow-lg cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <AnimatePresence>
                {expandedCard === index && (
                  <motion.div
                    initial={{ maxHeight: 0, opacity: 0 }}
                    animate={{ maxHeight: "100px", opacity: 1 }}
                    exit={{ maxHeight: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-700">{card.details}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
