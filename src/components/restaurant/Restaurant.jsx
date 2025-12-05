import Reviews from "../reviews/reviews";
import Menu from "../menu/menu";

export default function Restaurant({ name, menu, reviews }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      {menu.length < 1 ? null : <Menu menu={menu} />}
      {reviews.length < 1 ? null : <Reviews reviews={reviews} />}
    </div>
  );
}
