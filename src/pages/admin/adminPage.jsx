//routes
import { Routes, Route, Link } from "react-router-dom";

//pages
import AdminPageHeader from "../../components/AdminPageHeader";

import Settings from "./components/Settings";
import Users from "./components/Users";
import Reviews from "./components/Reviews";
import Products from "./components/Products";
import AdminDashboard from "./components/adminDashboard";
//icons
import { BsGraphDown } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineSpeaker, MdOutlineReviews } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export default function AdminPage() {
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Header */}
      <AdminPageHeader />

      {/* Content area = sidebar + main */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-[175px] h-full bg-white border-r border-gray-200 p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-6">Admin Menu</h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/admin/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors">
                <BsGraphDown className="text-xl" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors">
                <FaRegUser className="text-xl" />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/products"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors">
                <MdOutlineSpeaker className="text-xl" />
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/reviews"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors">
                <MdOutlineReviews className="text-xl" />
                <span>Reviews</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/settings"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors">
                <IoSettingsOutline className="text-xl" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/reviews" element={<Reviews />} />
            <Route path="/admin/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}