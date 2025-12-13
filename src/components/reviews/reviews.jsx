import { ReviewForm } from "../review-form/review-form";
import styles from "./reviews.module.css";

export default function Reviews({ reviews }) {
  return (
    <div>
      <h3>Отзывы</h3>
      <ul className={styles.reviewsList}>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
      <ReviewForm />
    </div>
  );
}
