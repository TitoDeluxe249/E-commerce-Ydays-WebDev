import { ArrowRight } from "../../assets/Icons.jsx";
import videoSource from "../../assets/images/hero/vedette.mp4";

const Hero = () => {
    return (
        <div className="Hero my-8">
            <div className="slides h-[38rem] relative">
                <video
                    className="slide w-full h-full object-cover rounded-2xl"
                    autoPlay
                    loop
                    muted
                >
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="content-overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-8 text-white">
                    <h1 className="text-6xl font-bold text-center mb-4">
                        Live fashion boldly, express yourself with style!
                    </h1>
                    <a
                        href="/VesteCatalogue"
                        className="outline-none border-none bg-white px-6 py-4 rounded-xl flex gap-2 text-gray-700"
                    >
                        Shop Now <ArrowRight classNames="stroke-gray-700" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
