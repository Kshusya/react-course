import { useState } from "react";
import Restaurant from "../restaurant/Restaurant.jsx";

export default function RestaurantSelector({ restaurants }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const currentRestaurant = restaurants[activeIndex];

  return (
    <div>
      <h3>Выберите ресторан:</h3>
      <ul>
        {restaurants.map((restaurant, index) => (
          <li key={index}>
            <button onClick={() => handleTabClick(index)}>
              {restaurant.name}
            </button>
          </li>
        ))}
      </ul>
      <Restaurant
        name={currentRestaurant.name}
        menu={currentRestaurant.menu}
        reviews={currentRestaurant.reviews}
      />
    </div>
  );
}
