import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import FilterListIcon from "@mui/icons-material/FilterList";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

const FilterForm = ({ onFilter }) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const animationProps = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -50 },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ make, model, minPrice, maxPrice });
  };

  return (
    <animated.form onSubmit={handleSubmit} style={animationProps}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Box textAlign="center" mb={1}>
            <FilterListIcon fontSize="large" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Min Price"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Max Price"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Box textAlign="center">
            <Button variant="contained" color="primary" type="submit">
              Filter
            </Button>
          </Box>
        </Grid>
      </Grid>
    </animated.form>
  );
};

export default FilterForm;
