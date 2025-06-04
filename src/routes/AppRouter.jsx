import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ScrapePage from "../modules/scraping/pages/ScrapePage";
import ProfilePage from "../modules/auth/pages/ProfilePage"; // si tienes esto también

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/scrape" element={<ScrapePage />} />
    <Route path="/perfil" element={<ProfilePage />} />
  </Routes>
);

export default AppRouter;
