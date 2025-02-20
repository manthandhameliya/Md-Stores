import { FaStar, FaRegStar } from 'react-icons/fa'; // Import icons from FontAwesome via react-icons
import Image from "next/image";
import Link from 'next/link';

export default function Brands() {
    return (
        <main id='brands' className='mt-28 mb-10'>
            <div className="w-full flex justify-center items-center mt-10 mb-1 max-w-screen-2xl mx-auto">
                {/* Container */}
                <div className="w-[90%] md:w-[80%] bg-[#F0F0F0] p-5 md:p-8 rounded-2xl shadow-lg">
                    {/* Title */}
                    <div className="text-center">
                        <h1 className="text-black text-2xl md:text-4xl font-extrabold">BROWSE BY DRESS STYLE</h1>
                    </div>

                    {/* Dress Style Boxes */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8'>
                        {[
                            { title: "Casual", img: "/dress1.png" },
                            { title: "Formal", img: "/dress2.png" },
                            { title: "Party", img: "/dress3.png" },
                            { title: "Gym", img: "/dress5.png" }
                        ].map((dress, index) => (
                            <Link href="/products" key={index} className="relative group">
                                <div className="relative bg-white w-full h-[250px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                                    {/* Image */}
                                    <Image 
                                        src={dress.img} 
                                        className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-all duration-300"
                                        width={200} 
                                        height={200} 
                                        alt={dress.title}
                                    />
                                    {/* Overlay Text */}
                                    <h1 className='absolute left-5 top-5 text-xl font-bold bg-white/80 px-4 py-2 rounded-md'>
                                        {dress.title}
                                    </h1>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
