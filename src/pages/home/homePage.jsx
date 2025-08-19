import Header from "../../components/homePageHeader";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/contact";
import Gallery from "./components/gallery";
import Products from "./components/Products";

export default function HomePage() {
    return (
        <>
            <Header />

            <div className="w-full h-[calc(100vh-100px)] bg-gray-50 ">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/products" element={<Products />} />
                </Routes>

            </div>
            
        </>
    );
}