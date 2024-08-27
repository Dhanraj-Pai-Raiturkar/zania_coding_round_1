import "./App.css";
import Card from "./components/card/Card";
import { useFetch } from "./hooks/UseFetch";
import DataInterface from "./interface/data";
import { useEffect, useState } from "react";

function App() {
  const url = "http://localhost:3000/cats";
  const { loading, response, setResponse, fetchData } = useFetch(url);
  const moveCard = (dragIndex: number, dropIndex: number) => {
    setResponse((prev: DataInterface[]) => {
      let temp;
      temp = prev[dragIndex];
      prev[dragIndex] = prev[dropIndex];
      prev[dropIndex] = temp;
      localStorage.localData = JSON.stringify(prev);
      return [...prev];
    });
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
  return (
    <div className="App">
      <div className="container">
        {loading ? (
          <h2>loading...</h2>
        ) : (
          response.map((item: DataInterface, index: number) => {
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
          })
        )}
      </div>
    </div>
  );
}

export default App;
