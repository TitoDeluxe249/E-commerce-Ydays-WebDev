import { ArrowRight } from "../../assets/Icons";
import Image from "../../assets/images/hero/7.jpg"

const Offer = () => {
    return (
        <div className="Offer">
            <div className="flex w-full bg-gray-900 h-72 rounded-xl overflow-hidden my-12">
                <img 
                    src={Image} 
                    alt="" 
                    className="w-5/12 h-auto object-cover image center bg-gradient-to-r from-gray-300 to-gray-100" 
                />
                <div className="flex flex-col items-start justify-center content w-7/12 px-16 space-y-4">
                    <h4 className="font-semibold text-gray-500">LIMITED OFFER</h4>
                    <h2 className="font-semibold text-white text-4xl">
                        35% OFF only this monday and get special gift
                    </h2>
                    <a 
                    href="#"
                    className="outline-none border-none bg-white px-6 py-4 rounded-xl flex gap-2 text-gray-700"
                    >
                        Shop Now <ArrowRight classNames="stroke-gray-700" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Offer;