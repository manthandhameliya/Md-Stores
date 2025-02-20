import Image from "next/image"

export default function Hero() {
  return (
    <main className="relative bg-[#F2F0F1] mt-[70px] md:mt-[90px] min-h-[600px] w-full overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-10 py-8 md:py-12 flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Left Content */}
        <div className="w-full md:w-[500px] lg:w-[600px] space-y-6 md:space-y-8 z-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900 animate-fadeIn">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 max-w-[90%]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          
          <button className="group w-full sm:w-auto text-base bg-black hover:bg-gray-800 text-white py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg">
            <span>Shop Now</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Stats Section */}
          <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-8 mt-8 md:mt-12">
            <div className="flex-1 min-w-[150px] border-r border-gray-300 pr-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">200+</h2>
              <p className="text-sm md:text-base text-gray-600">
                International Brands
              </p>
            </div>
            <div className="flex-1 min-w-[150px] border-r border-gray-300 pr-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">2,000+</h2>
              <p className="text-sm md:text-base text-gray-600">
                High-Quality Products
              </p>
            </div>
            <div className="flex-1 min-w-[150px]">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">30,000+</h2>
              <p className="text-sm md:text-base text-gray-600">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative mt-8 md:mt-0">
          <div className="relative w-[300px] md:w-[500px] h-[400px] md:h-[600px]">
            <Image
              src="/profile.png"
              layout="fill"
              objectFit="cover"
              alt="Hero model"
              className="z-0"
              priority
            />
          </div>
          
          {/* Decorative Stars */}
          <div className="absolute top-[60px] right-6 w-[70px] md:w-[100px] h-[70px] md:h-[100px] animate-float">
            <Image
              src="/star.png"
              layout="fill"
              objectFit="contain"
              alt="Decorative star"
            />
          </div>
          
          <div className="absolute top-[230px] -left-[30px] w-[50px] md:w-[70px] h-[50px] md:h-[70px] animate-float-delayed">
            <Image
              src="/star.png"
              layout="fill"
              objectFit="contain"
              alt="Decorative star"
            />
          </div>
        </div>
      </div>
    </main>
  )
}