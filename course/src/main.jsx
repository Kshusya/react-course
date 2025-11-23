import ReactDOM from "react-dom/client";
import restaurants from "./constants.js";
import Restaurant from "./Restaurant.jsx";
import "./index.css";
import "normalize.css";

function App() {
  return (
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
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
