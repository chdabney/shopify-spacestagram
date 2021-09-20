import { Container } from "@mui/material";
import React from "react";
import { useAxios } from "../api/api";
import NasaCard from "../components/NasaCard";

const { REACT_APP_API_KEY } = process.env;

const API_BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}&count=50`;

function Main() {
  const [result, error, isLoading] = useAxios(API_BASE_URL);

  console.log(result);

  return (
    <Container>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div>
          {error && (
            <div>
              <p>{error.message}</p>
            </div>
          )}
          {result && (
            <div>
              {result.map((item) => (
                <NasaCard key={item.title} {...item} />
              ))}
            </div>
          )}
        </div>
      )}
    </Container>
  );
}

export default Main;
