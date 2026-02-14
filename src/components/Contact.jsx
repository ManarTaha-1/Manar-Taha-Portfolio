import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsClockFill } from "react-icons/bs";

function Contact(){
    const contact = [
        {
            id: 1,
            title: "GitHub",
            subtitle: "Check out my projects",
            href: "https://github.com/ManarTaha-1",
            fa: <FaGithub/>,
        },
        {
            id: 2,
            title: "LinkedIn",
            subtitle: "Let's connect professionally",
            href: "https://www.linkedin.com/in/manar-taha-1847442b6",
            fa: <FiLinkedin/>,
        },
        {
            id: 3,
            title: "E-Mail",
            subtitle: "manartaha8382@gmail.com",
            href: "mailto:manartaha8382@gmail.com",
            fa: <MdEmail/>,
        },
        {
            id: 4,
            title: "Phone",
            subtitle: "+20 101 510 8860",
            href: "tel:+201015108860",
            fa: <FaPhoneAlt/>,
        }
    ];

    return(
        <div className="contact flex flex-col min-h-screen justify-center bg-pink-100 gap-10 md:gap-12 items-center pt-20 pb-20 px-6 sm:px-10 relative overflow-hidden" id="Contact">
            
            {/* Decorative circles */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl"></div>
            
            {/* Header Section */}
            <div className="relative z-10 flex flex-col items-center gap-5 md:gap-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-pink-700 text-center">
                    Get In Touch
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 text-center max-w-2xl leading-relaxed px-4">
                    Feel free to reach out via any of the platforms below 🌸
                </p>
            </div>

            {/* Contact Cards */}
            <div className="icons relative z-10 mt-6 w-full max-w-5xl">
                <ul className="list-none w-full grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                    {contact.map((link) => (
                        <li key={link.id}>
                            <a 
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    flex flex-col
                                    gap-3
                                    bg-white 
                                    px-6 md:px-8 
                                    py-6 md:py-7
                                    rounded-2xl 
                                    border-2 border-pink-200
                                    font-bold 
                                    transition-all 
                                    duration-300
                                    hover:shadow-2xl
                                    hover:shadow-pink-300/50
                                    hover:scale-102
                                "
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl md:text-3xl text-pink-700  transition-colors duration-300">
                                        {link.fa}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl text-gray-800  transition-colors duration-300">
                                            {link.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-500 transition-colors duration-300 mt-1">
                                            {link.subtitle}
                                        </p>
                                    </div>
                                    <svg 
                                        className="w-6 h-6 text-pink-700  opacity-100 transition-all duration-300 group-hover:translate-x-1" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer Message */}
            <div className="relative z-10 mt-8 text-center max-w-3xl">
                <div className=" backdrop-blur-sm px-8 py-6">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        💌 I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision!
                    </p>
                    <p className="text-sm md:text-base text-gray-500 mt-3">
                        ⚡ Usually responds within 24 hours
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;