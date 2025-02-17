import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi, I'm Rahul", "I am Rahul", "Hi, I'm Rahul"]; // Updated text
  const [currenText, setCurrentText] = useState("");
  const [endValue, setendValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setendValue((prev) => prev + 1);
      } else {
        setendValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }

      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length); // Corrected index update logic
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="transition ease duration-300 pt-10" style={{ color: "green-500" }}>{currenText}</div>;
};

export default TextChange;
