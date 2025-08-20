import './login.css'

export default function LoginPage() {
  return (
    <div className="w-full h-screen bgIMG flex justify-center items-center">
      {/* Glassmorphic Card */}
      <div className="w-[400px] p-8 flex flex-col justify-center items-center 
                      rounded-2xl backdrop-blur-xl bg-white/10 
                      shadow-2xl border border-white/20">

        {/* Logo */}
        <img 
          src="/kv-audio-logo.svg" 
          alt="Logo" 
          className="w-[200px] h-[60px] mb-6 drop-shadow-lg"
        />

        {/* Form */}
        <form className="flex flex-col gap-5 w-full">
          <input 
            type="text" 
            placeholder="Username" 
            className="p-3 rounded-md bg-white/10 border border-white/20 
                       text-white placeholder-gray-300 focus:outline-none 
                       focus:ring-2 focus:ring-blue-500 transition"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="p-3 rounded-md bg-white/10 border border-white/20 
                       text-white placeholder-gray-300 focus:outline-none 
                       focus:ring-2 focus:ring-purple-500 transition"
          />

          <button 
            type="submit" 
            className="mt-4 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                       text-white py-3 rounded-md font-semibold 
                       shadow-lg hover:shadow-pink-500/40 
                       hover:scale-105 transform transition-all duration-300"
          >
            🎧 Login
          </button>
        </form>

        {/* Signup */}
        <p className="mt-6 text-sm text-gray-300">
          Not a member? <a href="#" className="underline hover:text-pink-400">Sign up</a>
        </p>
      </div>
    </div>
  );
}