import React from 'react';
import { Cart } from "../assets/Icons";
import Pantalon3 from "../assets/images/hero/6.jpg";
import Pantalon2 from "../assets/images/featured/pantalon2.jpg";
import Pantalon4 from "../assets/images/Section-Femme/NewPantF3.webp";
import Pantalon5 from "../assets/images/Section-Femme/NewPantF4.webp";
import Tshirt1 from "../assets/images/Section-Femme/New1.webp";
import Tshirt2 from "../assets/images/Section-Femme/New2.webp";
import Veste1 from "../assets/images/Section-Femme/NewVesteF5.webp";
import Veste2 from "../assets/images/Section-Femme/NewVesteF6.webp";


const WomenCategorie = () => {
  const women = [
    { id: 1, name: 'DAY Birger & Mikkelsen', description: 'Description du pantalon 2', price: 179.95, discountPrice: 239.95, image: Pantalon2 },
    { id: 2, name: 'Autumn Pant', description: 'Description du pantalon 3', price: 59.00, discountPrice: 99.00, image: Pantalon3 },
    { id: 3, name: 'Shifted Pant', description: 'Description du pantalon 4', price: 80.00, discountPrice: 85.00, image: Pantalon4 },
    { id: 4, name: 'NB Harmony High Rise Legging 27"', description: 'Description du pantalon ', price: 55.00, discountPrice: 75.00, image: Pantalon5 },
    { id: 5, name: 'Linear Heritage Jersey Oversized T-Shirt', description: 'Description du tshirt 1', price: 40.00, discountPrice: 60.00, image: Tshirt1 },
    { id: 6, name: 'NB Harmony Light Support Sports Bra', description: 'Description du tshirt 2', price: 40.00, discountPrice: 60.00, image: Tshirt2 },
    { id: 7, name: 'Linear Heritage Woven Jacket', description: 'Description de la veste 1', price: 100.00, discountPrice: 120.00, image: Veste1 },
    { id: 8, name: 'Interlock Jacket', description: 'Description de la veste 2', price: 120.00, discountPrice: 140.00, image: Veste2 },
  ];

  const WomenItem = ({ women }) => {
    return (
      <div className="card w-full md:w-1/3 h-auto mb-4">
        <img src={women.image} alt={women.name} className="bg-gradient-to-r from-gray-300 to-gray-100 rounded-md aspect-[3/4]" />
        <div className="flex justify-between items-start py-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl text-gray-700 font-extrabold">
              <a href="#" className="font-semibold underline">{women.name}</a>
            </h3>
            <h2 className="text-2xl text-gray-900 font-bold flex items-start gap-2">
              ${women.price}<del className="text-sm text-gray-400">${women.discountPrice}</del>
            </h2>
          </div>
          <span className="w-12 h-12 bg-gray-900 rounded-xl grid place-items-center">
            <Cart classNames="stroke-white w-4 -ml-0" />
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="flex flex-wrap -mx-4">
        {women.map(women => (
          <div className="w-full md:w-1/2 px-4" key={women.id}>
            <WomenItem women={women} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenCategorie;
