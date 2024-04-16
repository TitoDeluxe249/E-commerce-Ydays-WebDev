import { Cart } from "../../assets/Icons.jsx";


const Features = () => {
    return (
        <div className="Features flex flex-col gap-12 py-12">
            <div className="top flex justify-between items-center">
                <h1 className="text-gray-900 font-bold text-3xl">
                The number 1 <br /> customer experience
                </h1>
                <div className="h-full flex items-center gap-12 text-gray-500 hover:text-blue-700">
                    <div className="w-1 h-24 bg-gray-800 hover:bg-purple-900"></div>
                    We ensure our customers have the best shopping experience
                </div>
            </div>
            <div className="main flex gap8 items-stretch">
            <div className="card w-1/4 h-auto">
                <span className="w-16 h-16 bg-gray-200 rounded-xl grid place-items-center">
                    <Cart classNames="stroke-gray-800 w-5" />
                </span>
                <h3 className="text-xl text-gray-900 font-extrabold my-4">
                    Original products
                </h3>
                <p className="text-gray-600 hover:text-yellow-700 text-sm">
                    We provide money back <br />guarantee
                </p>
            </div>
            <div className="card w-1/4 h-auto">
                <span className="w-16 h-16 bg-gray-200 rounded-xl grid place-items-center">
                    <Cart classNames="stroke-gray-800 w-5" />
                </span>
                <h3 className="text-xl text-gray-900 font-extrabold my-4">
                    Satisfaction Guarantee
                </h3>
                <p className="text-gray-600 hover:text-yellow-700 text-sm">
                    Exchange the product you've purchased
                </p>
            </div>
            <div className="card w-1/4 h-auto">
                <span className="w-16 h-16 bg-gray-200 rounded-xl grid place-items-center">
                    <Cart classNames="stroke-gray-800 w-5" />
                </span>
                <h3 className="text-xl text-gray-900 font-extrabold my-4">
                    Fast & Free Shipping   
                </h3>
                <p className="text-gray-600 hover:text-yellow-700 text-sm">
                    We offer fast and free shipping for our loyal customers
                </p>
            </div>
            </div>
        </div>
    );
};

export default Features;