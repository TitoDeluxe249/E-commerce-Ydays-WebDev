import React from 'react';
import { Cart } from "../assets/Icons";
import Veste1 from "../assets/images/Section-Enfant2/1.webp";
import Veste2 from "../assets/images/Section-Enfant2/3.webp";
import Pantalon1 from "../assets/images/Section-Enfant2/2.webp";
import Pantalon2 from "../assets/images/Section-Enfant2/4.webp";



const KidsCategorie = () => {
  const kids = [
    { id: 1, name: 'Essentials Brushed Back Hoodie', description: 'Description du sweat', price: 60.00, discountPrice: 80.00, image: Veste1 },
    { id: 2, name: 'Essentials Brushed Back Pant', description: 'Description du pantalon', price: 55.00, discountPrice: 75.00, image: Pantalon1 },
    { id: 3, name: 'FC Porto Home Youth Short Sleeve Jersey', description: 'Description du t-shirt', price: 70.00, discountPrice: 99.00, image: Veste2 },
    { id: 4, name: 'Tenacity Football Training Pant', description: 'Description du pantalon ', price: 40.00, discountPrice: 65.00, image: Pantalon2 },
  ];

  const KidsItem = ({ kids }) => {
    return (
      <div className="card w-full md:w-1/3 h-auto mb-4">
        <img src={kids.image} alt={kids.name} className="bg-gradient-to-r from-gray-300 to-gray-100 rounded-md aspect-[3/4]" />
        <div className="flex justify-between items-start py-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl text-gray-700 font-extrabold">
              <a href="#" className="font-semibold underline">{kids.name}</a>
            </h3>
            <h2 className="text-2xl text-gray-900 font-bold flex items-start gap-2">
              ${kids.price}<del className="text-sm text-gray-400">${kids.discountPrice}</del>
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
        {kids.map(kids => (
          <div className="w-full md:w-1/2 px-4" key={kids.id}>
            <KidsItem kids={kids} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsCategorie;
