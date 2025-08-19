import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa6";
import { MdOutlineSpeaker } from "react-icons/md";
import { Routes , Route, Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";


export default function AdminPage() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">

        <header className="w-full h-[65px] shadow-md flex items-center px-4 gap-4 bg-white">
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


        <div className="w-screen h-[calc(100vh-65px)] flex flex-col">
          {/* side bar */}
          <aside className="w-[250px] h-full bg-gray-100 p-4">
            <h2 className="text-lg font-semibold mb-4">Admin Menu</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/admin/dashboard" className="text-blue-600 hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin/users" className="text-blue-600 hover:underline">
                  Users
                </Link>
              </li>
              <li>
                <Link to="/admin/settings" className="text-blue-600 hover:underline">
                  Settings
                </Link>
              </li>
            </ul>
          </aside>
        </div>


      </div>
    </>
  );
}