import Header from "../../components/header";
import { Routes, Route } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <Header />

            <div className="w-full h-[calc(100vh-100px)] bg-gray-50 ">
                <Routes>
                    <Route path="/" element={<h1 className="text-3xl text-center mt-20 bg-gray-50">Welcome to KV Audio</h1>} />
                    <Route path="/contact" element={<h1 className="text-3xl text-center mt-20 bg-transparent">Contact Us</h1>} />
                    <Route path="/gallery" element={<h1 className="text-3xl text-center mt-20 bg-gray-50">Gallery</h1>} />
                    <Route path="/products" element={<h1 className="text-3xl text-center mt-20 bg-gray-50">Our Products</h1>} />
                </Routes>

            </div>
            
        </>
    );
}