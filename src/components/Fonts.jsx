import {
  Playfair_Display,
  Cinzel,
  Prata,
  Montserrat
} from "next/font/google"

// Load Fonts
const playfair = Playfair_Display({ subsets: ["latin"] })
const cinzel = Cinzel({ subsets: ["latin"] })
const prata = Prata({
  subsets: ["latin"],
  weight: "400"
})
const montserrat = Montserrat({ subsets: ["latin"] })

export default function FontShowcase() {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 py-8 md:py-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8">
          {/* Versace */}
          <h1 
            className={`${playfair.className} text-2xl md:text-4xl text-white font-bold opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            Versace
          </h1>

          {/* Zara */}
          <h1 
            className={`${playfair.className} text-2xl md:text-4xl text-white font-bold opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            Zara
          </h1>

          {/* Gucci */}
          <h1 
            className={`${cinzel.className} text-2xl md:text-4xl text-white font-bold opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer `}
          >
            Gucci
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </h1>

          {/* Prada */}
          <h1 
            className={`${prata.className} text-2xl md:text-4xl text-white font-bold opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            Prada
          </h1>

          {/* Calvin Klein */}
          <h1 
            className={`${montserrat.className} text-2xl md:text-4xl text-white font-light tracking-wider opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            Calvin Klein
          </h1>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate 16 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 translate-y-16 blur-3xl"></div>
      </div>
    </div>
  )
}