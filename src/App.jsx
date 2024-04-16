import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Home/Header';
import Hero from './Components/Home/Hero';
import TopBar from './Components/Home/TopBar';
import Features from './Components/Home/Features';
import Categories from './Components/Home/Categories';
import Featured from './Components/Home/Featured';
import Offer from './Components/Home/Offer';
import Footer from './Components/Footer';
import Profile from './Components/Profile';
import BasketCatalogue from './Components/BasketCatalogue';
import VesteCatalogue from './Components/VesteCatalogue';
import PantsCatalogue from './Components/PantsCatalogue';
import Panier from './Components/Panier';
import Login from './Components/Login';
import WomenCategorie from './Components/WomenCategorie';
import MenCategorie from './Components/MenCategorie';
import KidsCategorie from './Components/KidsCategorie';

const App = () => {
  return (
    <Router>
      <div>
        <TopBar />
        <div className="px-24">
          <Header />
          <Routes>
            <Route path="/" element={<React.Fragment>
              <Hero />
              <Features />
              <Categories />
              <Featured />
              <Offer />
            </React.Fragment>} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/BasketCatalogue" element={<BasketCatalogue />} />
            <Route path="/VesteCatalogue" element={<VesteCatalogue />} />
            <Route path="/PantsCatalogue" element={<PantsCatalogue />} />
            <Route path="/Panier" element={<Panier />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/WomenCategorie" element={<WomenCategorie />} />
            <Route path="/MenCategorie" element={<MenCategorie />} />
            <Route path="/KidsCategorie" element={<KidsCategorie />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
