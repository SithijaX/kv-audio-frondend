import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa6";
import { MdOutlineSpeaker } from "react-icons/md";
import { Routes , Route, Link } from "react-router-dom";


export default function AdminPage() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[400px] h-full bg-green-200">

        {/* Dashboard Button */}
        <button className="w-full h-[40px] text-2xl font-bold flex justify-center items-center gap-2">
          <BsGraphDown />
          Dashboard
        </button>

        {/* Bookings Button */}
        <Link to="/admin/bookings">
          <button className="w-full h-[40px] text-2xl font-bold flex justify-center items-center gap-2">
            <FaRegBookmark />
            Bookings
          </button>
        </Link>

        {/* Users Button */}
        <Link to="/admin/users">
          <button className="w-full h-[40px] text-2xl font-bold flex justify-center items-center gap-2">
            <FaRegUser />
            Users
          </button>
        </Link>

        {/* Speakers Button */}
        <Link to="/admin/products">
          <button className="w-full h-[40px] text-2xl font-bold flex justify-center items-center gap-2">
            <MdOutlineSpeaker />
            Products
          </button>
        </Link>

      </div>

      <div className="w-[calc(100%-400px)] h-full bg-blue-200">
        <Routes>
          {/* Add your routes here */}
          {/* Bookings */}
          <Route path="/bookings" element={<h1>Bookings Page</h1>} />
          <Route path="/products" element={<h1>Products Page</h1>} />
        </Routes>
      </div>
    </div>
  );
}