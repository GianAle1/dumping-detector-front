import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ScrapePage from "../modules/scraping/pages/ScrapePage";
import ProfilePage from "../modules/auth/pages/ProfilePage";
import DashboardPage from "../modules/dashboard/pages/DashboardPage";
import LoginPage from "../modules/auth/pages/LoginPage";
import RegisterPage from "../modules/auth/pages/RegisterPage";
import useAuth from "../context/useAuth"; // ✅

const AppRouter = () => {
  const { user, loading } = useAuth();

  if (loading) return null; // mientras carga sesión

  return (
    <Routes>
      {/* Ruta pública */}
      <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
      <Route path="/register" element={!user ? <RegisterPage /> : <Navigate to="/" />} />

      {/* Rutas privadas */}
      <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" />} />
      <Route path="/scrape" element={user ? <ScrapePage /> : <Navigate to="/login" />} />
      <Route path="/perfil" element={user ? <ProfilePage /> : <Navigate to="/login" />} />
      <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/login" />} />

      {/* Redirección por defecto */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
