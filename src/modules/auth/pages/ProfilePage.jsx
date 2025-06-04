import React, { useState, useEffect } from "react";
import { Container, Typography, Avatar, Paper, Box, Divider, Button } from "@mui/material";
import Sidebar from "../../../components/Sidebar";


const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulación de datos de usuario
    const fakeUser = {
      email: "usuario@ejemplo.com",
      nombre: "Alejo",
      apellido: "Gómez",
      nickname: "alejog"
    };
    setUser(fakeUser);
  }, []);

  const handleLogout = () => {
    alert("Cerrar sesión (simulado)");
  };

  if (!user) {
    return <Typography>Cargando perfil...</Typography>;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 4, ml: "240px" }}>
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
              <Avatar sx={{ width: 80, height: 80, bgcolor: "primary.main", fontSize: "2rem", mb: 2 }}>
                {user.nombre[0].toUpperCase()}
              </Avatar>
              <Typography variant="h4" sx={{ mb: 1 }}>¡Bienvenido!</Typography>
              <Typography variant="h5">{user.nombre} {user.apellido}</Typography>
              <Typography variant="subtitle1" sx={{ mb: 2, color: "text.secondary" }}>@{user.nickname}</Typography>
              <Typography variant="body1" sx={{ mb: 3, textAlign: "center" }}>
                Has iniciado sesión con: <strong>{user.email}</strong>
              </Typography>

              <Divider sx={{ width: "100%", my: 2 }} />

              <Button variant="contained" color="primary" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default ProfilePage;
