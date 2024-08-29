import "./App.css";
import Card from "./components/card/Card";
import { useFetch } from "./hooks/UseFetch";
import DataInterface from "./interface/data";
import { useEffect } from "react";
import { ListManager } from "react-beautiful-dnd-grid";
import { reorder } from "./utils/listUtilities";

function App() {
  const url = "http://localhost:3000/cats";
  const { response, setResponse, moveCard, fetchData } = useFetch(url);
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
            />
          </div>
        )}
        onDragEnd={moveCard}
      />
    </div>
  );
}

export default App;
