import { useState } from "react";
import DataInterface from "../interface/data";
import { reorder } from "../utils/listUtilities";

export const useFetch = (url: string) => {
  const localData = localStorage?.localData
    ? JSON.parse(localStorage.localData)
    : [];
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<DataInterface[]>(localData);
  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetch(url);
      const response = await data.json();
      setResponse(response);
      setLoading(false);
    } catch (error) {
      console.error("fetchData");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  const moveCard = (dragIndex: number, dropIndex: number) => {
    if (dragIndex !== dropIndex) {
      setResponse((prev: DataInterface[]) => [
        ...reorder(prev, dragIndex, dropIndex),
      ]);
    }
  };
  return { loading, response, setResponse, moveCard, fetchData };
};
