import { HiLocationMarker } from "react-icons/hi";

function Home(){
  const codeSnippets = [
    { text: 'const developer = { name: "Manar" };', left: '5%', top: '20%', delay: '0s', duration: '8s' },
    { text: 'function createMagic() {', left: '85%', top: '25%', delay: '1s', duration: '10s' },
    { text: '  return innovation;', left: '30%', top: '70%', delay: '2s', duration: '9s' },
    { text: '}', left: '90%', top: '50%', delay: '0.5s', duration: '11s' },
    { text: 'let dreams = true;', left: '80%', top: '40%', delay: '2.5s', duration: '10.5s' },
  ];

  return (
    <>
      <div id="Home" className="home 
        px-6
        sm:px-10
        md:px-16
        lg:px-20 
        py-20
        md:py-32
        flex
        min-h-screen
        flex-col
        gap-6
        md:gap-8
        items-center
        justify-center
        relative
        bg-pink-100
      ">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Code snippets */}
          {codeSnippets.map((snippet, index) => (
            <div
              key={index}
              className="absolute text-gray-400 font-mono text-xs sm:text-sm md:text-base whitespace-nowrap hidden md:block"
              style={{
                left: snippet.left,
                top: snippet.top,
                animation: `float ${snippet.duration} ease-in-out infinite`,
                animationDelay: snippet.delay
              }}
            >
              {snippet.text}
            </div>
          ))}
        </div>
        
        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
            }
            25% {
              transform: translateY(-20px) translateX(10px);
            }
            50% {
              transform: translateY(-10px) translateX(-10px);
            }
            75% {
              transform: translateY(-30px) translateX(5px);
            }
          }
        `}</style>

        <h1 className=" font-bold text-3xl text-pink-700 sm:text-4xl md:text-5xl lg:text-6xl mt-0 md:mt-15 text-center px-4 relative z-10">
          Hi, I'm Manar Taha 🌸
        </h1>
        {/* Location badge */}
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border border-pink-100">
            <HiLocationMarker className="text-pink-600 text-xl" />
            <span className="text-gray-700 font-medium text-sm md:text-base">Based in Ismailia, Egypt</span>
          </div>
        
        <p className="font-medium text-base text-gray-500 sm:text-xl md:text-2xl lg:text-3xl max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl text-center px-4 relative z-10">
          Front-End Developer Crafting beautiful, responsive web experiences with modern technologies
        </p>
        
        <div className="buttons flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 w-full sm:w-auto px-4 relative z-10">
          <button className="text-pink-700 px-8  border-1 md:px-10 py-3 font-bold rounded-full cursor-pointer transition-all ease-in-out text-base md:text-lg duration-500 bg-pink-700 text-white w-full sm:w-auto hover:shadow-pink-400 hover:shadow-lg">
            <a href="#Projects">View My Work 🚀</a>
          </button>
          <button className=" px-8 md:px-10 py-3 font-bold rounded-full bg-white/10 backdrop-blur-md border border-black text-base md:text-lg cursor-pointer transition-all ease-in-out duration-500 hover:bg-pink-700 hover:text-white hover:border-pink-700 w-full sm:w-auto">
            <a href="#Contact">Get In Touch 💬</a>
          </button>
        </div>
        
      </div>
    </>
  );
}

export default Home;