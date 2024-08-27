import "./App.css";
import Data from "./static/data.json";
import Card from "./components/card/Card";
import DataInterface from "./interface/data";
import Modal from "./components/modal/Modal";

function App() {
  return (
    <div className="App">
      {/* <Modal /> */}
      <div className="container">
        {Data.map((item: DataInterface, index: number) => {
          return (
            <div className="col">
              <Card
                key={`card${index}`}
                title={item.title}
                type={item.type}
                position={item.position}
                image={item.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
