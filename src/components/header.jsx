import { Link } from "react-router-dom";

export default function Header(){

    return(
        <>
        <header className="w-full h-[100px] shadow-xl flex justify-center items-center relative">
            <img src="/kv-audio-logo.svg" alt="kv-audio logo" className="h-[80px] object-cover absolute left-2 " />
            <Link to="/" className="text-2xl font-bold m-4" >Home</Link>
            <Link to="/contact" className="text-2xl font-bold m-4" >Contact</Link>
            <Link to="/gallery" className="text-2xl font-bold m-4" >Gallery</Link>
            <Link to="/products" className="text-2xl font-bold m-4" >Products</Link>
        </header>

        </>
    )
}