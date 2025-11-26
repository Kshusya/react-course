import { Counter } from "./components/counter/counter";

export default function Restaurant({ name, menu, reviews }) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <h3>Меню</h3>
      <ul className="dish-list">
        {menu.map((dish) => (
          <li key={dish.id}>{dish.name}
          <Counter />
          </li>
        ))}
      </ul>

      <h3>Отзывы</h3>
      <ul className="reviews-list">
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </div>
  );
}
