export default function Reviews({ reviews }) {
  return (
    <div>
      <h3>Отзывы</h3>
      <ul className="reviews-list">
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </div>
  );
}
