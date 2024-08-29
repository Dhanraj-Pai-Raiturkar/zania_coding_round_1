import "./App.css";
import Card from "./components/card/Card";
import { useFetch } from "./hooks/UseFetch";
import DataInterface from "./interface/data";
import { useEffect, useState } from "react";
import { ListManager } from "react-beautiful-dnd-grid";
import { reorder } from "./utils/listUtilities";

function App() {
  const url = "http://localhost:3000/cats";
  const { loading, response, setResponse, fetchData } = useFetch(url);

  const moveCard = (dragIndex: number, dropIndex: number) => {
    if (dragIndex !== dropIndex) {
      setResponse((prev: DataInterface[]) => [
        ...reorder(response, dragIndex, dropIndex),
      ]);
    }
  };
  useEffect(() => {
    const localData = localStorage.localData
      ? JSON.parse(localStorage.localData)
      : undefined;
    if (!localData) {
      fetchData();
    } else {
      setResponse(localData);
    }
  }, []);
  useEffect(() => {
    localStorage.localData = JSON.stringify(response);
  }, [response]);
  const handleReset = () => {
    localStorage.removeItem("localData");
    window.location.reload();
  };
  return (
    <div className="App">
      <button className="reset_button" onClick={handleReset}>
        Reset
      </button>
      <ListManager
        items={response}
        direction="horizontal"
        maxItems={3}
        render={(item: DataInterface) => (
          <div key={`card${item.position}`} className="col">
            <Card
              title={item.title}
              type={item.type}
              position={item.position}
              image={item.image}
              moveCard={moveCard}
            />
          </div>
        )}
        onDragEnd={moveCard}
      />
    </div>
  );
}

export default App;
