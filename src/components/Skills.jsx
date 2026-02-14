import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";
import { PiFileCppFill } from "react-icons/pi";
import { FaJava } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";
import { SiJquery } from "react-icons/si";

function Skills(){
    const skills = [
        {
            id: 1,
            icon: <FaReact className="text-cyan-400"/>,
            title: "React",
            level: "Advanced"
        },
        {
            id: 2,
            icon: <FaJsSquare className="text-yellow-400"/>,
            title: "JavaScript",
            level: "Advanced"
        },
        {
            id: 3,
            icon: <RiTailwindCssFill className="text-cyan-500"/>,
            title: "Tailwind CSS",
            level: "Advanced"
        },
        {
            id: 4,
            icon: <FaCss3Alt className="text-blue-500"/>,
            title: "CSS3",
            level: "Advanced"
        },
        {
            id: 5,
            icon: <FaHtml5 className="text-orange-500"/>,
            title: "HTML5",
            level: "Advanced"
        },
        {
            id: 6,
            icon: <FaMobileScreenButton className="text-purple-500"/>,
            title: "Responsive Design",
            level: "Advanced"
        },
        {
            id: 7,
            icon: <FaGitAlt className="text-orange-600"/>,
            title: "Git & GitHub",
            level: "Intermediate"
        },
        {
            id: 8,
            icon: <LuFigma className="text-purple-600"/>,
            title: "Figma",
            level: "Intermediate"
        },
        {
            id: 9,
            icon: <PiFileCppFill className="text-blue-600"/>,
            title: "C++",
            level: "Intermediate"
        },
        {
            id: 10,
            icon: <FaJava className="text-red-600"/>,
            title: "Java",
            level: "Intermediate"
        },
        {
            id: 11,
            icon: <IoLogoSass className="text-pink-500"/>,
            title: "Sass",
            level: "Intermediate"
        },
        {
            id: 12,
            icon: <SiJquery className="text-blue-400"/>,
            title: "jQuery",
            level: "Intermediate"
        },
    ];

    return (
        <div 
            id="Skills" 
            className="
                min-h-screen
                py-16 sm:py-20 md:py-24 lg:py-32
                px-4 sm:px-6 md:px-10 lg:px-20
                flex flex-col 
                justify-center 
                items-center 
                gap-8 md:gap-12
                relative
                overflow-hidden
            "
        >
            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
            </div>

            {/* Header */}
            <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6 text-center">
                <h1 className="
                    text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl
                    font-bold  
                    px-4
                ">
                    Skills & Technologies
                </h1>
                <p className="
                    text-base sm:text-lg md:text-xl lg:text-2xl
                    text-gray-600 
                    max-w-3xl
                    px-4
                    leading-relaxed
                ">
                    Tools and technologies I use to bring ideas to life ✨
                </p>
            </div>

            {/* Skills Grid */}
            <div className="
                relative z-10
                grid 
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-4
                lg:grid-cols-4
                xl:grid-cols-6
                gap-4 sm:gap-5 md:gap-6
                w-full
                max-w-7xl
                mt-6 md:mt-10
            ">
                {skills.map((skill) => (
                    <div 
                        key={skill.id} 
                        className="
                            group
                            p-6 sm:p-7 md:p-8
                            flex flex-col 
                            justify-center 
                            items-center 
                            gap-3 sm:gap-4
                            cursor-pointer
                        "
                    >
                        <div className="
                            text-5xl sm:text-6xl md:text-7xl
                            transition-transform 
                            duration-300 
                            group-hover:scale-110
                            group-hover:rotate-6
                        ">
                            {skill.icon}
                        </div>
                        <div className="
                            font-bold 
                            text-gray-800 
                            text-sm sm:text-base md:text-lg
                            text-center
                            group-hover:text-pink-700
                            transition-colors
                            duration-300
                        ">
                            {skill.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer note */}
            <div className="relative z-10 mt-8 text-center">
                <p className="text-sm md:text-base text-gray-500 px-4">
                    🚀 Always learning and exploring new technologies!
                </p>
            </div>
        </div>
    );
}

export default Skills;