import { useState } from "react";
import Restaurant from "../restaurant/Restaurant.jsx";

export default function RestaurantSelector({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const handleTabClick = (index) => {
    if (index === activeId) return;
    setActiveId(index);
  };

  const currentRestaurant = restaurants.find(
    (restaurant) => restaurant.id === activeId
  );

  return (
    <div>
      <h3>Выберите ресторан:</h3>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <button onClick={() => handleTabClick(restaurant.id)}>
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
