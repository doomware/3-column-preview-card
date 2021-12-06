import { Fragment } from "react";
import "./App.css";
import Card from "./components/Card";
import Attribution from "./components/Attribution";

// https://www.pluralsight.com/guides/iterate-through-a-json-response-in-jsx-render-for-reactjs
// https://developer.mozilla.org/es/docs/Web/CSS/:nth-child

function App() {
  const autoData = {
    auto: [
      {
        type: "Sedans",
        description:
          "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
        img: "./images/icon-sedans.svg",
        id: 1,
      },
      {
        type: "SUVs",
        description:
          "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
        img: "./images/icon-suvs.svg",
        id: 2,
      },
      {
        type: "Luxury",
        description:
          "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
        img: "./images/icon-luxury.svg",
        id: 3,
      },
    ],
  };
  return (
    <Fragment>
      <div className="card-group">
        {autoData.auto.map((auto) => (
          <Card
            key={auto.id}
            type={auto.type}
            description={auto.description}
            img={auto.img}
          />
        ))}
      </div>
      <Attribution/>
    </Fragment>
  );
}

export default App;
