import React from 'react';
import { Cart } from "../assets/Icons";
import Pantalon8 from "../assets/images/featured/pantalon1.jpg";
import Pantalon9 from "../assets/images/featured/pantalon2.jpg";
import Pantalon10 from "../assets/images/hero/6.jpg";
import Pantalon13 from "../assets/images/Section-Femme/NewPantF3.webp";
import Pantalon11 from "../assets/image/pantalon1.webp";
import Pantalon12 from "../assets/images/Section-Femme/NewPantF4.webp";
import Pantalon3 from "../assets/image/pantalon3.jpg";
import Pantalon4 from "../assets/image/pantalon4.jpg";
import Pantalon5 from "../assets/image/pantalon5.jpg";
import Pantalon6 from "../assets/image/pantalon6.jpg";
import Pantalon7 from "../assets/image/pantalon7.jpg";


const PantsCatalogue = () => {
  const pantalons = [
    { id: 1, name: 'Wide leg jeans Blue', description: 'Description du pantalon 1', price: 29.99, discountPrice: 39.99, image: Pantalon8 },
    { id: 2, name: 'DAY Birger & Mikkelsen', description: 'Description du pantalon 2', price: 179.95, discountPrice: 239.95, image: Pantalon9 },
    { id: 3, name: 'Autumn Pant', description: 'Description du pantalon 3', price: 59.00, discountPrice: 99.00, image: Pantalon10 },
    { id: 5, name: 'NB Harmony High Rise Legging 27"', description: 'Description du pantalon ', price: 55.00, discountPrice: 75.00, image: Pantalon13 },
    { id: 6, name: 'Jogging - NEW BALANCE', description: 'Description du pantalon 2', price: 59.99, discountPrice: 79.99, image: Pantalon11 },
    { id: 7, name: 'Shifted Pant', description: 'Description du pantalon 4', price: 80.00, discountPrice: 85.00, image: Pantalon3 },
    { id: 8, name: 'Pant 27"', description: 'Description du pantalon ', price: 55.00, discountPrice: 75.00, image: Pantalon4 },
    { id: 9, name: 'Pant 47"', description: 'Description du pantalon ', price: 55.00, discountPrice: 75.00, image: Pantalon5 },
    { id: 10, name: 'Pant 18"', description: 'Description du pantalon ', price: 55.00, discountPrice: 75.00, image: Pantalon6 },
    { id: 11, name: 'Pant 31"', description: 'Description du pantalon ', price: 55.00, discountPrice: 75.00, image: Pantalon7 },


  ];

  const PantalonItem = ({ pantalon }) => {
    return (
      <div className="card w-full md:w-1/3 h-auto mb-4">
        <img src={pantalon.image} alt={pantalon.name} className="bg-gradient-to-r from-gray-300 to-gray-100 rounded-md aspect-[3/4]" />
        <div className="flex justify-between items-start py-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl text-gray-700 font-extrabold">
              <a href="#" className="font-semibold underline">{pantalon.name}</a>
            </h3>
            <h2 className="text-2xl text-gray-900 font-bold flex items-start gap-2">
              ${pantalon.price}<del className="text-sm text-gray-400">${pantalon.discountPrice}</del>
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
        {pantalons.map(pantalon => (
          <div className="w-full md:w-1/2 px-4" key={pantalon.id}>
            <PantalonItem pantalon={pantalon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PantsCatalogue;
