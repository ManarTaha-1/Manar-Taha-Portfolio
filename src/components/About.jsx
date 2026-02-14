import Manar from "../assets/Manar.png"

function About(){
    return(
        <div id="About" className=" px-6 py-17 md:px-10 md:py-16 lg:px-20 lg:py-22">
            <div className="max-w-7xl mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
                
                {/* Content Section */}
                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        About Me
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 mb-8">
                        I'm a passionate front-end developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies, I transform ideas into elegant, functional websites.
                        <br/><br/>
                        When I'm not coding, you'll find me exploring the latest design trends, contributing to open-source projects, or enjoying a good cup of coffee while sketching new interface ideas.
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                        <span className="text-pink-700 bg-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold shadow-md text-sm md:text-base">
                            Creative
                        </span>
                        <span className="text-pink-700 bg-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold shadow-md text-sm md:text-base">
                            Detail-Oriented
                        </span>
                        <span className="text-pink-700 bg-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold shadow-md text-sm md:text-base">
                            Problem Solver
                        </span>
                    </div>
                </div>
                
                {/* Image Section */}
                <div className="flex-shrink-0">
                    <img 
                        src={Manar} 
                        alt="Manar Profile" 
                        className="w-50 md:w-50 lg:w-60  object-cover "
                    />
                </div>
            </div>
        </div>
    );
}

export default About;