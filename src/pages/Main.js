import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useAxios } from "../api/api";
import { actionCreators } from "../redux/actions";
import NasaCard from "../components/NasaCard";

const { REACT_APP_API_KEY } = process.env;

const API_BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}&count=10`;

function Main() {
  const [result, error, isLoading] = useAxios(API_BASE_URL);

  const cardData = useSelector((state) => state.favorite.cardData);
  console.log(cardData);

  const dispatch = useDispatch();

  const { setCardData } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    setCardData(result);
  }, [result]);

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
          {cardData && (
            <div>
              {cardData.map((item) => (
                <NasaCard key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      )}
    </Container>
  );
}

export default Main;
