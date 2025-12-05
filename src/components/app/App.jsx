import restaurants from "../../constants.js";
import Restaurant from "../restaurant/Restaurant.jsx";
import { Layout } from "../layout/layout.jsx";
import RestaurantSelector from "../restaurant-selector/RestaurantSelector.jsx";

export const App = () => {
  return (
    <Layout>
      <div className="app-container">
        <RestaurantSelector restaurants={restaurants} />
      </div>
    </Layout>
  );
};
