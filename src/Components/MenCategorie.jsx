import React from 'react';
import { Cart } from "../assets/Icons";
import Pantalon1 from "../assets/image/pantalon1.jpg";
import Pantalon11 from "../assets/image/pantalon1.webp";
import Pantalon2 from "../assets/image/pantalon2.jpg";
import Pantalon3 from "../assets/image/pantalon3.jpg";
import Pantalon4 from "../assets/image/pantalon4.jpg";
import Pantalon5 from "../assets/image/pantalon5.jpg";
import Pantalon6 from "../assets/image/pantalon6.jpg";
import Pantalon7 from "../assets/image/pantalon7.jpg";
import Veste1 from "../assets/image/veste1.webp";
import Veste2 from "../assets/image/veste2.webp";
import Veste3 from "../assets/image/veste3.webp";
import Veste4 from "../assets/image/veste4.webp";
import Veste5 from "../assets/image/veste5.webp";
import Veste6 from "../assets/image/veste6.webp";


const MenCategorie = () => {
  const men = [
    { id: 1, name: 'Wide leg jeans Blue', description: 'Description du pantalon 1', price: 29.99, discountPrice: 39.99, image: Pantalon1 },
    { id: 2, name: 'Jogging - NEW BALANCE', description: 'Description du pantalon 2', price: 59.99, discountPrice: 79.99, image: Pantalon11 },
    { id: 3, name: 'DAY Birger & Mikkelsen', description: 'Description du pantalon 3', price: 179.95, discountPrice: 239.95, image: Pantalon2 },
    { id: 4, name: 'Shifted Pant', description: 'Description du pantalon 4', price: 80.00, discountPrice: 85.00, image: Pantalon3 },
    { id: 5, name: 'Pant 27"', description: 'Description du pantalon ', price: 55.00, discountPrice: 75.00, image: Pantalon4 },
    { id: 6, name: 'Pant 47"', description: 'Description du pantalon ', price: 55.00, discountPrice: 75.00, image: Pantalon5 },
    { id: 7, name: 'Pant 18"', description: 'Description du pantalon ', price: 55.00, discountPrice: 75.00, image: Pantalon6 },
    { id: 8, name: 'Pant 31"', description: 'Description du pantalon ', price: 55.00, discountPrice: 75.00, image: Pantalon7 },
    { id: 9, name: 'Sweat-shirt New Balance Oversized', description: 'Description de la veste 1', price: 60.00, discountPrice: 80.00, image: Veste1 },
    { id: 10, name: 'NB Sweat Beige Oversized', description: 'Description de la veste 2', price: 40.00, discountPrice: 60.00, image: Veste2 },
    { id: 11, name: 'Sweat-shirt Grey New Balance Oversized', description: 'Description de la veste 3', price: 42.00, discountPrice: 57.00, image: Veste3 },
    { id: 12, name: 'Interlock Jacket', description: 'Description de la veste 4', price: 120.00, discountPrice: 140.00, image: Veste4 },
    { id: 13, name: 'NB Sweat Red Oversized', description: 'Description de la veste 5', price: 120.00, discountPrice: 140.00, image: Veste5 },
    { id: 14, name: 'Tshirt All Star', description: 'Description de la veste 6', price: 70.00, discountPrice: 100.00, image: Veste6 },
  ];

  const MenItem = ({ men }) => {
    return (
      <div className="card w-full md:w-1/3 h-auto mb-4">
        <img src={men.image} alt={men.name} className="bg-gradient-to-r from-gray-300 to-gray-100 rounded-md aspect-[3/4]" />
        <div className="flex justify-between items-start py-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl text-gray-700 font-extrabold">
              <a href="#" className="font-semibold underline">{men.name}</a>
            </h3>
            <h2 className="text-2xl text-gray-900 font-bold flex items-start gap-2">
              ${men.price}<del className="text-sm text-gray-400">${men.discountPrice}</del>
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
        {men.map(men => (
          <div className="w-full md:w-1/2 px-4" key={men.id}>
            <MenItem men={men} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenCategorie;
