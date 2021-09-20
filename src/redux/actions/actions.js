export const SET_IS_FAVORITE = "SET_IS_FAVORITE";
export const SET_CARD_DATA = "SET_CARD_DATA";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export const setFavorite = (value) => {
  return (dispatch) => {
    dispatch({
      type: SET_IS_FAVORITE,
      payload: value,
    });
  };
};

export const setCardData = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_CARD_DATA,
      payload: data,
    });
  };
};

export const addToFavorites = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_FAVORITES,
      payload: data,
    });
  };
};
