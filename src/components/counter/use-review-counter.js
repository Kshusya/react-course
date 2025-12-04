import { useState } from "react";

const MIN = 1;
const MAX = 5;

export const useReviewCounter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((current) => (current < MAX ? current + 1 : current));
  };

  const decrement = () => {
    setCount((current) => (current > MIN ? current - 1 : current));
  };

  return [count, increment, decrement];
};
