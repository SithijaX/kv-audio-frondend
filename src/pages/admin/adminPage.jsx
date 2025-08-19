//routes
import { Routes , Route, Link } from "react-router-dom";

//pages
import AdminPageHeader from "../../components/adminPageHeader.jsx";

//icons
import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa6";
import { MdOutlineSpeaker } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineReviews } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";


export default function AdminPage() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">

        {/* Header */}
        <AdminPageHeader />

        <div className="w-screen h-[calc(100vh-65px)] flex }">
          {/* side bar */}
          <aside className="w-[200px] h-full bg-white border-r border-gray-200 p-5 shadow-sm">
 
            {/*Side bar title */}
            <h2 className="text-lg font-semibold text-gray-700 mb-6">
              Admin Menu
            </h2>

            {/* Sidebar Menu */}
            <ul className="space-y-2">

              {/* Dashboard */}
              <li>
                <Link
                  to="/admin/dashboard"
                  className="flex items-center gap-3 px-3 py-2 
                  rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors">

                  <BsGraphDown className="text-xl" />
                  <span>Dashboard</span>
                </Link>
              </li>

              {/* users */}
              <li>
                <Link 
                  to="/admin/users" 
                  className="flex items-center gap-3 px-3 py-2 
                  rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors">

                  <FaRegUser className="text-xl" />
                  <span>Users</span>
                  
                </Link>
              </li>

              {/* Products */}
              <li>
                <Link 
                  to="/admin/products" 
                  className="flex items-center gap-3 px-3 py-2 
                  rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors">
                    
                  <MdOutlineSpeaker className="text-xl" />
                  <span>Products</span>

                </Link>
              </li>


              {/* Reviews */}
              <li>
                <Link 
                  to="/admin/reviews" 
                  className="flex items-center gap-3 px-3 py-2 
                  rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors">
                    
                  <MdOutlineReviews className="text-xl" />
                  <span>Reviews</span>

                </Link>
              </li>

              {/*settings*/}
              <li>
                <Link 
                  to="/admin/settings" className="flex items-center gap-3 px-3 py-2 
                  rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors">
                  <IoSettingsOutline className="text-xl" />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
          </aside>
        </div>


      </div>
    </>
  );
}