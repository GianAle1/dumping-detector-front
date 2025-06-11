import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ScrapePage from "../modules/scraping/pages/ScrapePage";
import ProfilePage from "../modules/auth/pages/ProfilePage";
import DashboardPage from "../modules/dashboard/pages/DashboardPage";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/scrape" element={<ScrapePage />} />
    <Route path="/perfil" element={<ProfilePage />} />
    <Route path="/dashboard" element={<DashboardPage />} /> {/* 👈 AÑADIDO */}
  </Routes>
);

export default AppRouter;
