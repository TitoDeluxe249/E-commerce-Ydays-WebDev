import { Cart } from "../../assets/Icons"
import Basket4 from "../../assets/images/featured/basket4.jpg";
import Basket1 from "../../assets/images/featured/basket1.jpg";
import Basket2 from "../../assets/images/featured/basket2.jpg";
import Basket5 from "../../assets/images/featured/basket5.jpg";
import Image2 from "../../assets/images/hero/6.jpg";
import Pantalon1 from "../../assets/images/featured/pantalon1.jpg";
import Pantalon2 from "../../assets/images/featured/pantalon2.jpg";
import Veste4 from "../../assets/images/featured/veste4.jpg";



const Featured = () => {
    return (
        <div className="Featured">
            <div className="categories flex flex-col gap-12 py-12">
                <h1 className="text-gray-900 font-bold text-3xl">Featured</h1>
                <div className="cards flex gap-8 items-stretch flex-wrap">
                    <div className="card w-1/5 h-auto">
                        <img src={Basket4} 
                        alt=""
                        className="bg-gradient-to-r from-gray-300 to-gray-100 rounded-md
                        aspect-[3/4]" 
                        />
                        <div className="flex justify-between items-start py-6">
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl text-gray-700 font-extrabold">
                                <a href="#" className="font-semibold underline">
                                Nike
                                </a> 
                                <br />Dunk Low
                                </h3>
                                <h2 className="text-2xl text-gray-900 font-bold flex items-start
                                gap-2">
                                    $129,99<del className="text-sm text-gray-400">$159,99</del>
                                </h2>
                            </div>
                            <span className="w-12 h-12 bg-gray-900 rounded-xl grid
                            place-items-center">
                                <Cart classNames="stroke-white w-4 -ml-0.5" />
                            </span>
                        </div>
                    </div>
                    <div className="card w-1/5 h-auto">
                        <img src={Basket1} 
                        alt=""
                        className="bg-gradient-to-r from-gray-300 to-gray-100 rounded-md
                        aspect-[3/4]" 
                        />
                        <div className="flex justify-between items-start py-6">
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl text-gray-700 font-extrabold">
                                <a href="#" className="font-semibold underline">
                                New Balance 
                                </a>
                                <br />Unisexe 9060
                                </h3>
                                <h2 className="text-2xl text-gray-900 font-bold flex items-start
                                gap-2">
                                    $150,00<del className="text-sm text-gray-400">$190,00</del>
                                </h2>
                            </div>
                            <span className="w-12 h-12 bg-gray-900 rounded-xl grid
                            place-items-center">
                                <Cart classNames="stroke-white w-4 -ml-0.5" />
                            </span>
                        </div>
                    </div>
                    <div className="card w-1/5 h-auto">
                        <img src={Basket5} 
                        alt=""
                        className="bg-gradient-to-r from-gray-300 to-gray-100 rounded-md
                        aspect-[3/4]" 
                        />
                        <div className="flex justify-between items-start py-6">
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl text-gray-700 font-extrabold">
                                <a href="#" className="font-semibold underline">
                                Nike 
                                </a>
                                <br />Dunk Low Anthracite
                                </h3>
                                <h2 className="text-2xl text-gray-900 font-bold flex items-start
                                gap-2">
                                    $105,00<del className="text-sm text-gray-400">$130,00</del>
                                </h2>
                            </div>
                            <span className="w-12 h-12 bg-gray-900 rounded-xl grid
                            place-items-center">
                                <Cart classNames="stroke-white w-4 -ml-0.5" />
                            </span>
                        </div>
                    </div>
                    <div className="card w-1/5 h-auto">
                        <img src={Image2}
                        alt=""
                        className="bg-gradient-to-r from-gray-300 to-gray-100 rounded-md
                        aspect-[3/4]" 
                        />
                        <div className="flex justify-between items-start py-6">
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl text-gray-700 font-extrabold">
                                Autumn Pant
                                </h3>
                                <h2 className="text-2xl text-gray-900 font-bold flex items-start
                                gap-2">
                                    $59<del className="text-sm text-gray-400">$99</del>
                                </h2>
                            </div>
                            <span className="w-12 h-12 bg-gray-900 rounded-xl grid
                            place-items-center">
                                <Cart classNames="stroke-white w-4 -ml-0.5" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;