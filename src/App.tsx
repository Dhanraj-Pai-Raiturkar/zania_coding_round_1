import "./App.css";
import Data from "./static/data.json";
import Card from "./components/card/Card";
import DataInterface from "./interface/data";
import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState<any[]>(Data);
  const moveCard = (dragIndex: number, dropIndex: number) => {
    setCards((prev: DataInterface[]) => {
      let temp;
      temp = prev[dragIndex];
      prev[dragIndex] = prev[dropIndex];
      prev[dropIndex] = temp;
      return [...prev];
    });
  };
  return (
    <div className="App">
      <div className="container">
        {cards.map((item: DataInterface, index: number) => {
          return (
            <div key={`card${index}`} className="col">
              <Card
                title={item.title}
                type={item.type}
                position={index}
                image={item.image}
                moveCard={moveCard}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
