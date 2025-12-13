import Reviews from "../reviews/reviews";
import Menu from "../menu/menu";
import styles from "./Restaurant.module.css";

export default function Restaurant({ name, menu, reviews }) {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      {menu.length < 1 ? null : <Menu menu={menu} />}
      {reviews.length < 1 ? null : <Reviews reviews={reviews} />}
    </div>
  );
}
