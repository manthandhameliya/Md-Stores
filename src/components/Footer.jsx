import { FaTwitter, FaInstagram, FaSquareGithub } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import Stayudpate from "./udate";

const footerLinks = {
  company: ["About", "Features", "Works", "Career"],
  help: [
    "Customer Support",
    "Delivery Details",
    "Terms & Conditions",
    "Privacy Policy",
  ],
  faq: ["Account", "Manage Deliveries", "Orders", "Payments"],
  resources: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
};

export default function Footer() {
  return (
    <>
      {/* Newsletter Section */}
      <div className="w-full px-4 relative z-0">
        <div className="max-w-screen-lg mx-auto">
          <Stayudpate className="mb-6 md:mb-10" />
        </div>
      </div>

      <footer className="relative bg-[#F0F0F0] pt-16 pb-10 mt-8">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          {/* Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-8 border-b border-gray-300">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Md Store
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                We have clothes that suit your style and which you&apos;re proud to wear.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-all">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-700 transition-all">
                  <BsFacebook className="text-xl" />
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-all">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-all">
                  <FaSquareGithub className="text-xl" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="lg:col-span-1">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                  {title}
                </h2>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Copyright Section */}
          <div className="pt-6 text-center text-gray-600 text-sm">
            <p>
              Md Store © Made by{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-all">
                Manthan Dhameliya
              </a>
              , All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
