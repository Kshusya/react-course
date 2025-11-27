import { useState } from "react";

const MIN = 0;
const MAX = 5;

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((current) => (current < MAX ? current + 1 : current));
  };

  const decrement = () => {
    setCount((current) => (current > MIN ? current - 1 : current));
  };

  return [count, increment, decrement];
};
