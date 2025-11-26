import restaurants from "../../constants.js";
import Restaurant from "../../Restaurant.jsx";
import { Layout } from "../layout/layout.jsx";

export const App = () => {
    return (
      <Layout>
      <div className="app-container">
        {restaurants.map((place) => (
          <Restaurant
            key={place.id}
            name={place.name}
            menu={place.menu}
            reviews={place.reviews}
          />
        ))}
      </div>
      </Layout>
    );
};
