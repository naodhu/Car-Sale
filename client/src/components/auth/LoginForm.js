// /client/src/components/auth/LoginForm.js
import React, { useState, useContext } from "react";
import { login } from "../../services/authService";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { MailOutline, Lock } from "@mui/icons-material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Background = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, #282b32 0%, #1c1e23 100%);
  z-index: -1;
`;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext); // Use the setUser from the UserContext
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await login(email, password);
      setUser(user); // Update the UserContext with the logged-in user
      navigate("/home"); // Redirect the user to the home page
    } catch (error) {
      console.error("Error during login:", error.message);
      // Handle login errors (e.g., show a notification or message to the user)
    }
  };

  return (
    <Container maxWidth="sm">
      <Background
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: <MailOutline />,
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: <Lock />,
          }}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
        <Typography variant="body1">
          Don't have an account?{" "}
          <Link component={RouterLink} to="/register" underline="hover">
            Register
          </Link>
        </Typography>
        <Typography variant="body1">
          <Link component={RouterLink} to="/" underline="hover">
            <Home sx={{ verticalAlign: "middle", marginRight: 0.5 }} />
            Back to Home
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginForm;
