import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import { actionCreators } from "../redux/actions";

export const Likes = ({ ...props }) => {
  const favorite = useSelector((state) => state.favorite.favorites);
  const { title, url, date, explanation, id, isFavorite } = props;

  const dispatch = useDispatch();

  const { setFavorite, addToFavorites } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleClick = (id) => {
    setFavorite(id);
    addToFavorites({ props });
  };

  return (
    <div>
      <IconButton aria-label="add to favorites" onClick={() => handleClick(id)}>
        {isFavorite ? (
          <FavoriteIcon style={{ color: "red" }} />
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>
    </div>
  );
};
