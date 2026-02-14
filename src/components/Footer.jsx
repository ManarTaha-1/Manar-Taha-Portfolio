function Footer(){
    return (
        <footer className="bg-white text-pink-700 px-6 sm:px-10 md:px-20 py-8 md:py-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Logo/Brand */}
                <div className="text-center md:text-left">
                    <h1 className="font-bold text-2xl md:text-3xl">
                        Manar.Dev
                    </h1>
                </div>

                {/* Copyright */}
                <div className="text-center md:text-right">
                    <p className="text-sm md:text-base text-gray-700">
                        © 2026 <span className="font-bold text-pink-700">Manar</span> Developer. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Optional: Social Links or Quick Links */}
            <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-700">
                <a href="#Home" className="hover:text-pink-700 transition-colors duration-300">Home</a>
                <span className="hidden sm:inline">•</span>
                <a href="#About" className="hover:text-pink-700 transition-colors duration-300">About</a>
                <span className="hidden sm:inline">•</span>
                <a href="#Projects" className="hover:text-pink-700 transition-colors duration-300">Projects</a>
                <span className="hidden sm:inline">•</span>
                <a href="#Skills" className="hover:text-pink-700 transition-colors duration-300">Skills</a>
                <span className="hidden sm:inline">•</span>
                <a href="#Contact" className="hover:text-pink-700 transition-colors duration-300">Contact</a>
            </div>
        </footer>
    );
}

export default Footer;