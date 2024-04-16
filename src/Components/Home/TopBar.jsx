import { Close } from "../../assets/Icons.jsx";

const TopBar = () => {
    return (
        <div className="top-bar-container sticky top-0 z-50">
            <div className="top bg-gray-800 text-white flex items-center justify-between py-2 px-24">
                <div className="bar-content">
                    <p className="text-sm text-gray-300">
                        Sign up and <b className="text-white font-semibold">GET 30% OFF</b> on 
                        your first order{" "}
                        <a href="/Login" className="font-semibold text-white underline">
                            Sign Up Now
                        </a>
                    </p>
                    <a href="">
                        <Close classNames="w-5" />
                    </a>
                </div>

                <div className="bar-content">
                    <p className="text-sm text-gray-300">
                        Sign up and <b className="text-white font-semibold">GET 30% OFF</b> on 
                        your first order{" "}
                        <a href="/Login" className="font-semibold text-white underline">
                            Sign Up Now
                        </a>
                    </p>
                    <a href="">
                        <Close classNames="w-5" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
