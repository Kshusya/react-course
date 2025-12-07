import { Counter } from "../counter/counter";
import { useDishCounter } from "../counter/use-dish-counter";

export default function Dish({ dish }) {
  const [count, increment, decrement] = useDishCounter();

  return (
    <li>
      {dish.name}
      <Counter count={count} increment={increment} decrement={decrement} />
    </li>
  );
}
