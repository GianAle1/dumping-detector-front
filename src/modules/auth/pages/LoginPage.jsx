// src/modules/auth/pages/LoginPage.jsx
import { useState } from "react";
import { supabase } from "../../../supabaseClient";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Link
} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    if (error) setMessage(error.message);
    else navigate("/"); // o a tu ruta de inicio
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>Iniciar Sesión</Typography>
        {message && <Alert severity="error">{message}</Alert>}
        <TextField
          fullWidth
          label="Email"
          name="email"
          margin="normal"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Contraseña"
          name="password"
          type="password"
          margin="normal"
          value={form.password}
          onChange={handleChange}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Entrar
        </Button>

        {/* Enlace para registrarse */}
        <Box textAlign="center" mt={2}>
          <Typography variant="body2">
            ¿No tienes cuenta?{" "}
            <Link component={RouterLink} to="/register">
              Regístrate aquí
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
