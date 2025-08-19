//routes
import { Routes, Route, NavLink } from "react-router-dom";

//pages
import AdminPageHeader from "../../components/AdminPageHeader";
import Settings from "./components/Settings";
import Users from "./components/Users";
import Reviews from "./components/Reviews";
import Products from "./components/Products";
import AdminDashboard from "./components/AdminDashboard";

//icons
import { BsGraphDown } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineSpeaker, MdOutlineReviews } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export default function AdminPage() {
  // helper to style links easily
  const linkClasses = ({ isActive }) =>
    [
      "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
      isActive
        ? "bg-blue-100 text-blue-700 font-semibold shadow-sm"
        : "text-gray-600 hover:bg-blue-50 hover:text-blue-700",
    ].join(" ");

  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Header */}
      <AdminPageHeader />

      {/* Content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-[175px] h-full bg-white border-r border-gray-200 p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-6">Admin Menu</h2>
          <ul className="space-y-2">
            <li>
              <NavLink to="/admin/dashboard" className={linkClasses}>
                <BsGraphDown className="text-xl" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/users" className={linkClasses}>
                <FaRegUser className="text-xl" />
                <span>Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/products" className={linkClasses}>
                <MdOutlineSpeaker className="text-xl" />
                <span>Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/reviews" className={linkClasses}>
                <MdOutlineReviews className="text-xl" />
                <span>Reviews</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/settings" className={linkClasses}>
                <IoSettingsOutline className="text-xl" />
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route index element={<AdminDashboard />} /> {/* fallback: /admin → dashboard */}
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}