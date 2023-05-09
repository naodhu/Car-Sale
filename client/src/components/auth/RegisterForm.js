// /client/src/components/auth/RegisterForm.js
import React, { useState } from "react";
import { register } from "../../services/authService";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { MailOutline, Lock, CheckCircle, Person } from "@mui/icons-material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Background = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, #282b32 0%, #1c1e23 100%);
  z-index: -1;
`;

const RegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      // Handle password mismatch
      return;
    }
    try {
      await register({ name, email, password });
      // Handle user registration success
      navigate("/login");
    } catch (error) {
      // Handle registration errors
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
          Register
        </Typography>
        <TextField
          label="Name"
          type="text"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: <Person />,
          }}
        />

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
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: <CheckCircle />,
          }}
        />
        <Button type="submit" variant="contained">
          Register
        </Button>
        <Typography variant="body1">
          Already registered?{" "}
          <Link component={RouterLink} to="/login" underline="hover">
            Login
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

export default RegisterForm;
