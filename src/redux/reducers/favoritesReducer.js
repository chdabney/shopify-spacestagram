import {
  SET_IS_FAVORITE,
  SET_CARD_DATA,
  ADD_TO_FAVORITES,
  GET_FAVORITES,
} from "../actions/actions";
import { v4 as uuidv4 } from "uuid";

const intitalState = {
  favorites: [],
  cardData: [],
};

const favoritesReducer = (state = intitalState, action) => {
  switch (action.type) {
    case SET_IS_FAVORITE:
      return {
        ...state,
        cardData: state.cardData.map((card) =>
          card.id === action.payload
            ? { ...card, isFavorite: !card.isFavorite }
            : { ...card }
        ),
      };
    case SET_CARD_DATA:
      const cardArray = action.payload.map((card) => {
        const newCard = {
          id: uuidv4(),
          title: card.title,
          url: card.url,
          date: card.date,
          explanation: card.explanation,
          isFavorite: false,
        };
        return newCard;
      });
      return {
        ...state,
        cardData: [...state.cardData, ...cardArray],
      };
    case ADD_TO_FAVORITES:
      console.log("redux", state.favorites);
      return {
        ...state,
        favorites: state.cardData.filter((item) => item.isFavorite),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
