import axios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (url) => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setResult(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return [result, error, isLoading];
};
