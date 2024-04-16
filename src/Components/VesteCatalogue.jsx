import React from 'react';
import { Cart } from "../assets/Icons";
import Veste7 from "../assets/images/featured/veste4.jpg";
import Veste8 from "../assets/images/featured/vestecasual-femme-bleu.webp";
import Tshirt1 from "../assets/images/Section-Femme/New1.webp";
import Tshirt2 from "../assets/images/Section-Femme/New2.webp";
import Veste9 from "../assets/images/Section-Femme/NewVesteF5.webp";
import Veste10 from "../assets/images/Section-Femme/NewVesteF6.webp";
import Veste1 from "../assets/image/veste1.webp";
import Veste2 from "../assets/image/veste2.webp";
import Veste3 from "../assets/image/veste3.webp";
import Veste4 from "../assets/image/veste4.webp";
import Veste5 from "../assets/image/veste5.webp";
import Veste6 from "../assets/image/veste6.webp";


const VesteCatalogue = () => {
  const vestes = [
    { id: 1, name: 'New Balance MADE IN USA QUARTER ZIP', description: 'Description de la veste 1', price: 59, discountPrice: 99, image: Veste7 },
    { id: 2, name: 'Veste casual - Concept K', description: 'Description de la veste 2', price: 46.75, discountPrice: 93.50, image: Veste8 },
    { id: 3, name: 'Linear Heritage Jersey Oversized T-Shirt', description: 'Description du tshirt 1', price: 40.00, discountPrice: 60.00, image: Tshirt1 },
    { id: 4, name: 'NB Harmony Light Support Sports Bra', description: 'Description du tshirt 2', price: 40.00, discountPrice: 60.00, image: Tshirt2 },
    { id: 5, name: 'Linear Heritage Woven Jacket', description: 'Description de la veste 1', price: 100.00, discountPrice: 120.00, image: Veste9 },
    { id: 6, name: 'Interlock Jacket', description: 'Description de la veste 2', price: 120.00, discountPrice: 140.00, image: Veste10 },
    { id: 9, name: 'Sweat-shirt New Balance Oversized', description: 'Description de la veste 1', price: 60.00, discountPrice: 80.00, image: Veste1 },
    { id: 10, name: 'NB Sweat Beige Oversized', description: 'Description de la veste 2', price: 40.00, discountPrice: 60.00, image: Veste2 },
    { id: 11, name: 'Sweat-shirt Grey New Balance Oversized', description: 'Description de la veste 3', price: 42.00, discountPrice: 57.00, image: Veste3 },
    { id: 12, name: 'Interlock Jacket', description: 'Description de la veste 4', price: 120.00, discountPrice: 140.00, image: Veste4 },
    { id: 13, name: 'NB Sweat Red Oversized', description: 'Description de la veste 5', price: 120.00, discountPrice: 140.00, image: Veste5 },
    { id: 14, name: 'Tshirt All Star', description: 'Description de la veste 6', price: 70.00, discountPrice: 100.00, image: Veste6 },
  ];

  const VesteItem = ({ veste }) => {
    return (
      <div className="card w-full md:w-1/3 h-auto mb-4">
        <img src={veste.image} alt={veste.name} className="bg-gradient-to-r from-gray-300 to-gray-100 rounded-md aspect-[3/4]" />
        <div className="flex justify-between items-start py-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl text-gray-700 font-extrabold">
              <a href="#" className="font-semibold underline">{veste.name}</a>
            </h3>
            <h2 className="text-2xl text-gray-900 font-bold flex items-start gap-2">
              ${veste.price}<del className="text-sm text-gray-400">${veste.discountPrice}</del>
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
        {vestes.map(veste => (
          <div className="w-full md:w-1/2 px-4" key={veste.id}>
            <VesteItem veste={veste} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VesteCatalogue;
