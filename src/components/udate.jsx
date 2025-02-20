import { AiOutlineMail } from "react-icons/ai";

export default function StayUpdate() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4">
      <div className="bg-black rounded-3xl p-8 md:p-10 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          {/* Content Section */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <p className="mt-3 text-gray-400 text-sm md:text-base">
              Subscribe to our newsletter and get 10% off your first purchase
            </p>
          </div>

          {/* Form Section */}
          {/* Form Section */}
          <div className="w-full md:w-auto">
            <div className="flex flex-col space-y-4">
              {/* Email Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <AiOutlineMail className="text-gray-500 text-xl group-hover:text-black transition-colors duration-200" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full md:w-[300px] h-12 pl-10 pr-4 rounded-full bg-white/90 
                       hover:bg-white focus:bg-white transition-all duration-200
                       text-gray-900 placeholder-gray-500
                       outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Subscribe Button */}
              <button
                className="group relative h-12 w-full md:w-[300px] overflow-hidden rounded-full 
                     bg-white hover:bg-gray-100 transition-all duration-200"
              >
                <div className="absolute inset-0 w-3 bg-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-sm font-medium text-gray-900 group-hover:text-white">
                  Subscribe to Newsletter
                </span>
              </button>
            </div>

            {/* Privacy Notice */}
            <p className="mt-4 text-gray-400 text-xs">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
