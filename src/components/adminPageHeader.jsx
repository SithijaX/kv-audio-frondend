import { FaRegUser } from "react-icons/fa6";

import { IoMdSearch } from "react-icons/io";



export default function AdminPageHeader(){
    return (
        <>
            <header className="w-full h-[70px] shadow-md flex items-center px-4 gap-4 bg-white">
                {/* Logo */}
                <img
                    src="/kv-audio-logo.svg"
                    alt="kv-audio logo"
                    className="h-[45px] object-contain"
                />

                {/* Search Bar (flex-grow makes it expand between logo & user) */}
                <div className="flex-1 flex justify-center">
                    <div className="relative w-full max-w-lg">
                    <input
                        type="text"
                        placeholder="Type to search..."
                        className="w-full pl-10 pr-4 py-2 text-gray-700 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600 text-lg" />
                    </div>
                </div>

                {/* User Icon */}
                <FaRegUser className="text-purple-800 text-2xl cursor-pointer" />
            </header>
        
        
        
        </>
    )

}