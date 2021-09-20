import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";

export const Likes = ({ ...props }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { title, url, date, explanation } = props;

  const handleCLick = () => {
    setIsLiked((prevState) => !prevState);
    console.log(title, url, date, explanation);
  };
  return (
    <div>
      <IconButton aria-label="add to favorites" onClick={handleCLick}>
        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </div>
  );
};
