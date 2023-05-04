import React from "react";
import FavoriteItem from "./FavoriteItem";

const FavoritesList = ({ favorites }) => {
  return (
    <div>
      {favorites.map((favorite) => (
        <FavoriteItem key={favorite.id} favorite={favorite} />
      ))}
    </div>
  );
};

export default FavoritesList;
