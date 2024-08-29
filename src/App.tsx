import "./App.css";
import Card from "./components/card/Card";
import { useFetch } from "./hooks/UseFetch";
import DataInterface from "./interface/data";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
  const handleReset = () => {
    localStorage.removeItem("localData");
    window.location.reload();
  };
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(response);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setResponse(items);
  };
  return (
    <div className="App">
      <button className="reset_button" onClick={handleReset}>
        Reset
      </button>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="CARDS" direction="horizontal">
          {(provided) => (
            <div
              className="container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {response.map((item: DataInterface, index) => {
                return (
                  <Draggable
                    key={item.position}
                    draggableId={`${item.title}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        // key={`card${index}`}
                        className="col"
                      >
                        <Card
                          title={item.title}
                          type={item.type}
                          position={index}
                          image={item.image}
                          moveCard={moveCard}
                        />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
