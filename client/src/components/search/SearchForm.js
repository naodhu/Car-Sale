import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const animationProps = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -50 },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <animated.form onSubmit={handleSubmit} style={animationProps}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={9}>
          <TextField
            fullWidth
            label="Search for cars..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box textAlign="center">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </Box>
        </Grid>
      </Grid>
    </animated.form>
  );
};

export default SearchForm;
