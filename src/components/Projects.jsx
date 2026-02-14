import iceCream from "../assets/iceCream.png"
import calculator from "../assets/calculator.png"
import Desserts from "../assets/Desserts.png"
import Extensions from "../assets/Extensions.png"
import Flowers from "../assets/Flowers.png"
import Nothar from "../assets/Nothar.png"

function Projects(){
    const projects = [
        {
            id: 1,
            image: Nothar,
            title: "Nothar",
            description: "Nothar is Articles Website include(future, space, energy, science, tech) 📚",
            technologies: ["JavaScript", "CSS3", "HTML5"],
            liveDemo: "https://manartaha-1.github.io/Nothar/",
            github: "https://github.com/ManarTaha-1/Nothar"
        },
        {
            id: 2,
            image: iceCream,
            title: "Ice Cream Shop",
            description: "Ice cream shop featuring various flavors, juices, and cones 🍨🍧🍦",
            technologies: ["React", "Tailwind CSS", "HTML5"],
            liveDemo: "https://icecream-wine.vercel.app/",
            github: "https://github.com/ManarTaha-1/Ice-Cream"
        },
        {
            id: 3,
            image: calculator,
            title: "Calculator",
            description: "Calculator(addition, subtraction, multiplication, and division) 🧮🧮",
            technologies: ["JavaScript", "CSS3", "HTML5"],
            liveDemo: "https://manartaha-1.github.io/Calculator/",
            github: "https://github.com/ManarTaha-1/Calculator"
        },
        {
            id: 4,
            image: Desserts,
            title: "Desserts",
            description: "Desserts showcase featuring waffles, pistachio treats, cakes, and pies 🍰",
            technologies: ["JavaScript", "CSS3", "HTML5"],
            liveDemo: "https://manartaha-1.github.io/Products/",
            github: "https://github.com/ManarTaha-1/Products"
        },
        {
            id: 5,
            image: Extensions,
            title: "Extensions",
            description: "Extensions remove, activate, and deactivate extensions efficiently ⚡",
            technologies: ["JavaScript", "CSS3", "HTML5"],
            liveDemo: "https://manartaha-1.github.io/Extensions/",
            github: "https://github.com/ManarTaha-1/Extensions"
        },
        {
            id: 6,
            image: Flowers,
            title: "Flowers",
            description: "Flowers Website helps you buy Fresh & Natural & beautiful Flowers 🌸🌸",
            technologies: ["CSS3", "HTML5"],
            liveDemo: "https://manartaha-1.github.io/Flowers-project/",
            github: "https://github.com/ManarTaha-1/Flowers-project"
        }
    ];

    return(
        <div 
            id="Projects" 
            className="
                flex flex-col 
                min-h-screen 
                bg-pink-100 
                justify-center 
                px-10 sm:px-10 md:px-13 lg:px-16 xl:px-20
                py-16 sm:py-20 md:py-24 lg:py-32
            "
        >
            {/* Title Section */}
            <div className="title flex flex-col justify-center items-center mb-12 md:mb-16 lg:mb-20 gap-4 md:gap-5">
                <h1 className="
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                    font-bold 
                    text-pink-700
                    text-center
                    px-4
                ">
                    Featured Projects
                </h1>
                <p className="
                    text-base sm:text-lg md:text-xl lg:text-2xl
                    text-gray-600
                    text-center 
                    max-w-3xl 
                    px-4
                    leading-relaxed
                ">
                    A showcase of my recent work, demonstrating my skills in modern web development ✨
                </p>
            </div>

            {/* Cards Grid */}
            <div className="
                cards 
                grid 
                grid-cols-1 
                sm:grid-cols-1
                md:grid-cols-2 
                lg:grid-cols-3 
                gap-6 sm:gap-8 md:gap-10 lg:gap-12
                max-w-7xl
                mx-auto
                w-full
            ">
                {projects.map((project) => (
                    <div 
                        key={project.id}
                        className="
                            card 
                            flex 
                            flex-col 
                            bg-white 
                            rounded-2xl 
                            shadow-lg 
                            transition-all 
                            duration-300 
                            ease-in-out
                            hover:shadow-2xl
                            hover:shadow-pink-300/30
                            hover:scale-105
                            hover:-translate-y-2
                            overflow-hidden
                        "
                    >
                        {/* Image */}
                        <div className="w-full h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
                            <img 
                                src={project.image} 
                                className="
                                    w-full 
                                    h-full 
                                    object-cover 
                                    transition-transform 
                                    duration-500 
                                    hover:scale-110
                                " 
                                alt={`${project.title} Project`} 
                            />
                        </div>
                        
                        {/* Content */}
                        <div className="flex flex-col flex-1 p-5 sm:p-6 md:p-7">
                            {/* Title */}
                            <h2 className="
                                font-bold 
                                text-xl sm:text-2xl md:text-2xl
                                text-gray-800 
                                mb-3
                            ">
                                {project.title}
                            </h2>
                            
                            {/* Description */}
                            <p className="
                                text-gray-600 
                                text-sm sm:text-base
                                leading-relaxed 
                                mb-5
                                flex-1
                            ">
                                {project.description}
                            </p>
                            
                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="
                                            text-pink-700 
                                            bg-pink-50 
                                            px-3 sm:px-4
                                            py-1.5 sm:py-2
                                            rounded-full 
                                            font-semibold 
                                            text-xs sm:text-sm
                                            border border-pink-200
                                        "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full mt-auto">
                                <a 
                                    href={project.liveDemo} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="
                                        flex-1 
                                        bg-pink-700 
                                        text-white 
                                        text-center 
                                        py-3
                                        px-4 
                                        rounded-lg 
                                        font-semibold 
                                        text-sm sm:text-base
                                        hover:bg-pink-800 
                                        transition-all
                                        duration-300
                                        hover:shadow-lg
                                    "
                                >
                                    Live Demo
                                </a>
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="
                                        flex-1 
                                        bg-gray-800 
                                        text-white 
                                        text-center 
                                        py-3
                                        px-4 
                                        rounded-lg 
                                        font-semibold 
                                        text-sm sm:text-base
                                        hover:bg-gray-900 
                                        transition-all
                                        duration-300
                                        hover:shadow-lg
                                    "
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;