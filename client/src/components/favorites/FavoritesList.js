import React from "react";
import FavoriteItem from "./FavoriteItem";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import { useSpring, animated } from "react-spring";

const FavoritesList = ({ favorites, onRemoveFavorite }) => {
  const animationProps = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -50 },
  });

  return (
    <animated.div style={animationProps}>
      <Paper sx={{ p: 2, mt: 2 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Favorites
        </Typography>
        <List>
          {favorites.map((car) => (
            <FavoriteItem
              key={car.id}
              car={car}
              onRemoveFavorite={onRemoveFavorite}
            />
          ))}
        </List>
      </Paper>
    </animated.div>
  );
};

export default FavoritesList;
