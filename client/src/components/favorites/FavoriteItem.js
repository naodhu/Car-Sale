import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const FavoriteItem = ({ car, onRemoveFavorite }) => {
  return (
    <ListItem>
      <ListItemText primary={`${car.make} ${car.model}`} />
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => onRemoveFavorite(car)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default FavoriteItem;
