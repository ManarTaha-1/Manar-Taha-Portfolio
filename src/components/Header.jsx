import { useState } from "react";

function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    
    return (
        <header className="Header w-full text-xl px-6 md:px-12 lg:px-20 py-5 fixed top-0 bg-white/10 backdrop-blur-md shadow-md flex flex-row justify-between items-center z-50">
            <div className="logo font-bold text-2xl md:text-3xl text-pink-800">Manar<span className="text-black">.</span></div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex list-none text-base md:text-lg text-gray-700 flex-row gap-8 xl:gap-12">
                <li className="
                after:absolute 
                relative 
                after:content-[''] 
                after:w-0 
                after:h-0.5 
                after:transition-all 
                after:bg-pink-700 
                after:left-0 
                after:bottom-0 
                after:duration-500
                duration-500 
                hover:text-pink-700 
                hover:after:w-full 
                cursor-pointer
                ">
                    <a href="#Home">Home</a>
                </li>
                <li className="
                after:absolute 
                relative 
                after:content-[''] 
                after:w-0 
                after:h-0.5 
                after:transition-all 
                after:bg-pink-700 
                after:left-0 
                after:bottom-0 
                after:duration-500
                duration-500 
                hover:text-pink-700 
                hover:after:w-full 
                cursor-pointer
                ">
                    <a href="#About">About</a>
                </li>
                <li className="
                after:absolute 
                relative 
                after:content-[''] 
                after:w-0 
                after:h-0.5 
                after:transition-all 
                after:bg-pink-700 
                after:left-0 
                after:bottom-0 
                after:duration-500
                duration-500 
                hover:text-pink-700 
                hover:after:w-full 
                cursor-pointer
                ">
                    <a href="#Projects">Projects</a>
                </li>
                <li className="
                after:absolute 
                relative 
                after:content-[''] 
                after:w-0 
                after:h-0.5 
                after:transition-all 
                after:bg-pink-700 
                after:left-0 
                after:bottom-0 
                after:duration-500
                duration-500 
                hover:text-pink-700 
                hover:after:w-full 
                cursor-pointer
                ">
                    <a href="#Skills">Skills</a>
                </li>
                <li className="
                after:absolute 
                relative 
                after:content-[''] 
                after:w-0 
                after:h-0.5 
                after:transition-all 
                after:bg-pink-700 
                after:left-0 
                after:bottom-0 
                after:duration-500
                duration-500 
                hover:text-pink-700 
                hover:after:w-full 
                cursor-pointer
                ">
                    <a href="#Contact">Contact</a>
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMenuIsOpen(!menuIsOpen)}
                className=" lg:hidden w-10 relative cursor-pointer flex flex-col justify-center gap-3"
                aria-label="Toggle menu"
            >
                <span className={`w-full bg-pink-800 h-0.5 block rounded-full transition-all duration-300 ease-in-out
                    ${menuIsOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`w-full bg-pink-800 h-0.5 block rounded-full transition-all duration-300 ease-in-out
                    ${menuIsOpen ? 'opacity-0 scale-0' : 'scale-100 opacity-100'}`}></span>
                <span className={`w-full bg-pink-800 h-0.5 block rounded-full transition-all duration-300 ease-in-out
                    ${menuIsOpen ? '-rotate-45 -translate-y-4' : ''}`}></span>
            </button>

            {/* Mobile Menu */}
            <div className={`top-20 right-4 md:right-10 w-72 sm:w-80 flex flex-col bg-gradient-to-br from-white via-pink-50 to-white backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 ease-out fixed border border-pink-100
                ${menuIsOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95 pointer-events-none'}`}>
                <a href="#Home" onClick={() => setMenuIsOpen(false)} className="group px-8 sm:px-10 py-4 sm:py-5 border-b border-pink-100 transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-pink-100 hover:to-pink-50 hover:text-pink-800 hover:pl-10 sm:hover:pl-12 relative overflow-hidden text-base sm:text-lg">
                    <span className="relative z-10 font-medium">Home</span>
                    <div className="absolute left-0 top-0 h-full w-1 bg-pink-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </a>
                <a href="#About" onClick={() => setMenuIsOpen(false)} className="group px-8 sm:px-10 py-4 sm:py-5 border-b border-pink-100 transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-pink-100 hover:to-pink-50 hover:text-pink-800 hover:pl-10 sm:hover:pl-12 relative overflow-hidden text-base sm:text-lg">
                    <span className="relative z-10 font-medium">About</span>
                    <div className="absolute left-0 top-0 h-full w-1 bg-pink-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </a>
                <a href="#Projects" onClick={() => setMenuIsOpen(false)} className="group px-8 sm:px-10 py-4 sm:py-5 border-b border-pink-100 transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-pink-100 hover:to-pink-50 hover:text-pink-800 hover:pl-10 sm:hover:pl-12 relative overflow-hidden text-base sm:text-lg">
                    <span className="relative z-10 font-medium">Projects</span>
                    <div className="absolute left-0 top-0 h-full w-1 bg-pink-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </a>
                <a href="#Skills" onClick={() => setMenuIsOpen(false)} className="group px-8 sm:px-10 py-4 sm:py-5 border-b border-pink-100 transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-pink-100 hover:to-pink-50 hover:text-pink-800 hover:pl-10 sm:hover:pl-12 relative overflow-hidden text-base sm:text-lg">
                    <span className="relative z-10 font-medium">Skills</span>
                    <div className="absolute left-0 top-0 h-full w-1 bg-pink-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </a>
                <a href="#Contact" onClick={() => setMenuIsOpen(false)} className="group px-8 sm:px-10 py-4 sm:py-5 transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-pink-100 hover:to-pink-50 hover:text-pink-800 hover:pl-10 sm:hover:pl-12 relative overflow-hidden text-base sm:text-lg">
                    <span className="relative z-10 font-medium">Contact</span>
                    <div className="absolute left-0 top-0 h-full w-1 bg-pink-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </a>
            </div>
        </header>
    );
}

export default Header;