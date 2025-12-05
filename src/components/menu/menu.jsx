import { Counter } from "../counter/counter";

export default function Menu({ menu }) {
  return (
    <div>
      <h3>Меню</h3>
      <ul className="dish-list">
        {menu.map((dish) => (
          <li key={dish.id}>
            {dish.name}
            <Counter />
          </li>
        ))}
      </ul>
    </div>
  );
}
