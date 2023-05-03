import React from "react";

const FavoriteItem = ({ favorite }) => {
  return (
    <div>
      <h3>{favorite.car.name}</h3>
      <p>Added on {favorite.dateAdded}</p>
    </div>
  );
};

export default FavoriteItem;
