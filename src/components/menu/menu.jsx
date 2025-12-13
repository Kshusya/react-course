import Dish from "../dish/dish.jsx";
import styles from "./menu.module.css";

export default function Menu({ menu }) {
  return (
    <div>
      <h3>Меню</h3>
      <ul className={styles.dishList}>
        {menu.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </ul>
    </div>
  );
}
