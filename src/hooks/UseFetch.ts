import { useEffect, useState } from "react";
import DataInterface from "../interface/data";

export const useFetch = (url: string) => {
  const localData = localStorage?.localData
    ? JSON.parse(localStorage.localData)
    : [];
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<any[]>(localData);
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
  return { loading, response, setResponse, fetchData };
};
