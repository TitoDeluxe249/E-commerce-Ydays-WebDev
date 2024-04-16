import { Search, Cart, User } from "../../assets/Icons.jsx";
import Logo from "../../assets/Design-logo.png";
import { useState } from 'react';
import '../Header.css';

const Header = () => {
  const [dropdowns, setDropdowns] = useState({
    basket: false,
    veste: false,
    pantalon: false,
  });

  const toggleDropdown = (item) => {
    console.log("Toggle dropdown for:", item);
    setDropdowns({
      ...dropdowns,
      [item]: !dropdowns[item],
    });
  };
  

  return (
    <header>
      <div className="main flex justify-between items-center py-6">
        <a href="/" className="logo-link">
          <img src={Logo} alt="logo" style={{ width: '150px', height: 'auto' }} />
        </a>            
        <ul className="menu flex gap-8">
          <li>
            <a href="/" className="text-gray-500 hover:text-red-700 text-lg font-semibold">
              Accueil
            </a>
          </li>
          <li>
            <a href="/Profile" className="text-gray-500 hover:text-blue-700 text-lg font-semibold">
              Profil
            </a>
          </li>
          <li>
            <a href="/BasketCatalogue" className="text-gray-500 hover:text-green-700 text-lg font-semibold">
              Baskets
            </a>
          </li>
          <li>
            <a href="/VesteCatalogue" className="text-gray-500 hover:text-yellow-700 text-lg font-semibold">
              Vestes
            </a>
          </li>
          <li>
            <a href="/PantsCatalogue" className="text-gray-500 hover:text-purple-700 text-lg font-semibold">
              Pantalons
            </a>
          </li>
        </ul>
        <div className="other flex items-center gap-8">
          <label 
            className="input flex gap-2 items-center px-4 py-2.5 rounded-xl bg-gray-50 border-2 bg-gray-100" 
            htmlFor="search"
          >
            <a href="">
              <Search classNames="stroke-gray-400" />
            </a> 
            <input 
              type="text"
              id="search"
              placeholder="Recherche"
              className="border-none outline-none bg-transparent"
            />
          </label>
          <div className="icons flex items-center gap-4">
            <a href="/Panier">
              <Cart classNames="w-5 h-5 stroke-gray-700" />
            </a> 
            <a href="/Login">
              <User classNames="w-5 h-5 stroke-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
