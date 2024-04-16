import Logo from "../assets/Design-logo.png"
import Mastercard from "../assets/images/Footer/Mastercard-Logo.png"
import Paypal from "../assets/images/Footer/PayPal-Logo.png"
import Visa from "../assets/images/Footer/Visa-Logo.png"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="flex flex-col bg-gray-200">
                <div className="top flex justify-between px-24 py-16">
                    <div className="one">
                        <img src={Logo} alt="" />
                        <h3 className="text-gray-500">
                        Specializing in high quality products, <br />
                        elegant products for your comfort.
                        </h3>
                    </div>
                    <div className="two flex gap-8">
                        <div>
                            <h4 className="text-gray-800 font-semibold mb-4">SHOP</h4>
                            <ul className="flex flex-col gap-1">
                                <li>
                                    <a className="text-gray-400 text-sm" href="#">
                                        All Collection
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-400 text-sm" href="#">
                                        Limited Edition
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-400 text-sm" href="#">
                                        Discount
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-gray-800 font-semibold mb-4">COMPANY</h4>
                            <ul className="flex flex-col gap-1">
                                <li>
                                    <a className="text-gray-400 text-sm" href="#">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-400 text-sm" href="#">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-400 text-sm" href="#">
                                        Affiliates
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-gray-800 font-semibold mb-4">SUPPORT</h4>
                            <ul className="flex flex-col gap-1">
                                <li>
                                    <a className="text-gray-400 text-sm" href="#">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-400 text-sm" href="#">
                                        Cookie Policy
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-400 text-sm" href="#">
                                        Terms of Use
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="three">
                        <h3 className="text-gray-800 font-semibold mb-4">
                            PAYMENT METHODS
                        </h3>
                        <div className="flex gap-4">
                        <img className="h-6 w-auto object-contain" src={Mastercard} alt="" />
                        <img className="h-6 w-auto object-contain" src={Paypal} alt="" />
                        <img className="h-6 w-auto object-contain" src={Visa} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bottom text-center text-sm py-4 text-gray-500 border-t border-t-gray-300">
                    Copyright @2024 TIBAY. All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;