// /client/src/components/search/SearchResult.js
import React from "react";
import { formatCurrency } from "../../utils/format";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const SearchResult = ({ car, onAddFavorite }) => {
  return (
    <ListItem>
      <ListItemText
        primary={`${car.Make} ${car.Model}`}
        secondary={
          <React.Fragment>
            <Typography component="span" variant="body2" color="text.primary">
              Year: {car.Year}
              {/* If you have a price property in your backend, update the line below */}
              {/* Price: {formatCurrency(car.price)} */}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default SearchResult;
