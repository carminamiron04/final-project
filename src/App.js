import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/App.css';
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import MealPage from './pages/MealPage';
import FavoritesPage from './pages/FavoritesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/meals" element={<HomePage/>} />
        <Route path="/meals/:idMeal" element={<MealPage/>} />
        <Route path="/favorites-page" element={<FavoritesPage/>} />
        <Route path="/contacts" element={<ContactPage/>} />
        <Route path="/aboutInfo" element={<AboutPage/>} />
        <Route path="/*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;