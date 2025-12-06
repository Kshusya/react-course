import { Counter } from "../counter/counter";
import { useDishCounter } from "../counter/use-dish-counter";

function Dish({ dish }) {
  const [count, increment, decrement] = useDishCounter();

  return (
    <li>
      {dish.name}
      <Counter count={count} increment={increment} decrement={decrement} />
    </li>
  );
}

export default function Menu({ menu }) {
  return (
    <div>
      <h3>Меню</h3>
      <ul className="dish-list">
        {menu.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </ul>
    </div>
  );
}
