import { NavLink } from "react-router-dom";

export default function Header(){

    //link styles
    const navLinkClass = ({ isActive }) =>
        [
        "relative mx-2 px-4 py-2 text-[15px] font-semibold rounded-full transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/60 focus-visible:ring-offset-2",
        isActive
            ? "text-blue-700 bg-blue-50 ring-1 ring-blue-200"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
        ].join(" ");

    return (
    <>
      {/* Sticky, translucent header with subtle border + shadow */}
      <header className="w-full h-20 sticky top-0 z-50 flex items-center justify-center px-4 md:px-6 pl-24 md:pl-32 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200 shadow-sm ">
        {/* Logo (kept absolute-left to match your layout) */}
        <img
          src="/kv-audio-logo.svg"
          alt="kv-audio logo"
          className="h-10 w-auto object-contain absolute left-4 md:left-6 select-none"
        />

        {/* Nav links (same items, upgraded styles) */}
        <NavLink to="/" end className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
        <NavLink to="/gallery" className={navLinkClass}>
          Gallery
        </NavLink>
        <NavLink to="/products" className={navLinkClass}>
          Products
        </NavLink>
      </header>
    </>
  );
}