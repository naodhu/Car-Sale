// /client/src/pages/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, Box, Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import carBackground from "../assets/car-background.jpg";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${carBackground});
  background-size: cover;
  background-position: center;
`;

const StyledGrid = styled(Grid)`
  padding: 32px;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 8px;
`;

const LandingPage = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };

  return (
    <StyledContainer maxWidth="xl">
      <motion.div initial="initial" animate="animate" variants={fadeIn}>
        <StyledGrid
          container
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs={12}>
            <Typography variant="h2" component="h1" align="center" gutterBottom>
              Welcome to Car Sales!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="p" align="center" gutterBottom>
              This website allows you to search, compare, and save your favorite
              cars. Register or log in to start exploring!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="primary">
                  Register
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button variant="outlined" color="primary">
                  Login
                </Button>
              </Link>
            </Grid>
          </Grid>
        </StyledGrid>
      </motion.div>
    </StyledContainer>
  );
};

export default LandingPage;
