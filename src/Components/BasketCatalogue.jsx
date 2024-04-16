import React from 'react';
import { Cart } from "../assets/Icons";
import Basket1 from "../assets/images/featured/basket1.jpg";
import Basket2 from "../assets/images/featured/basket2.jpg";
import Basket5 from "../assets/images/featured/basket5.jpg";
import Basket6 from "../assets/image/basket6.webp";
import Basket7 from "../assets/image/basket7.webp";

const BasketCatalogue = () => {
  const baskets = [
    { id: 1, name: 'Nike Dunk Low', description: 'Description de la basket 1', price: 129.99, discountPrice: 159.99, image: Basket1 },
    { id: 2, name: 'New Balance Unisexe 9060', description: 'Description de la basket 2', price: 150.00, discountPrice: 190.00, image: Basket2 },
    { id: 3, name: 'Nike Dunk Low Anthracite', description: 'Description de la basket 3', price: 105.00, discountPrice: 130.00, image: Basket5 },
    { id: 4, name: 'Nike Sport', description: 'Description de la basket 4', price: 90.00, discountPrice: 120.00, image: Basket6 },
    { id: 5, name: 'Nike Dunk Low Blue ', description: 'Description de la basket 5', price: 115.00, discountPrice: 140.00, image: Basket7 },
  ];

  const BasketItem = ({ basket }) => {
    return (
      <div className="card w-full md:w-1/3 h-auto mb-4">
        <img src={basket.image} alt={basket.name} className="bg-gradient-to-r from-gray-300 to-gray-100 rounded-md aspect-[3/4]" />
        <div className="flex justify-between items-start py-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl text-gray-700 font-extrabold">
              <a href="#" className="font-semibold underline">{basket.name}</a>
            </h3>
            <h2 className="text-2xl text-gray-900 font-bold flex items-start gap-2">
              ${basket.price}<del className="text-sm text-gray-400">${basket.discountPrice}</del>
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
        {baskets.map(basket => (
          <div className="w-full md:w-1/2 px-4" key={basket.id}>
            <BasketItem basket={basket} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasketCatalogue;
