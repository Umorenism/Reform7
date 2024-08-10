import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

interface TypingEffectProps {
  text: string;
  speed?: number;
  cursorColor?: string;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 50,
  cursorColor = "black",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(timer);
        setCursorVisible(false);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  const cursorAnimation = useSpring({
    opacity: cursorVisible ? 1 : 0,
    config: { duration: 500 },
    loop: cursorVisible,
  });

  return (
    <div className="relative inline-block">
      <span>{displayedText}</span>
      <animated.span
        style={{
          ...cursorAnimation,
          display: "inline-block",
          width: "2px",
          height: "1em",
          backgroundColor: cursorColor,
          marginLeft: "2px",
        }}
      />
    </div>
  );
};
