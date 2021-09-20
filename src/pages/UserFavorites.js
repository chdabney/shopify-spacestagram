import React from "react";
import { useSelector } from "react-redux";

import NasaCard from "../components/NasaCard";

export default function UserFavorites() {
  const favorites = useSelector((state) => state.favorite.favorites);

  return (
    <div>
      {favorites && (
        <div>
          {favorites.map((item) => (
            <NasaCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
