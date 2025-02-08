import ScrollIndicator from "../../ui/ScrollIndicator";
import image from "/images/image.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16   pt-[84px] flex-col relative flex min-h-screen w-full items-center justify-center "
    >
      <div > 
        <div className="flex flex-col  md:flex-row  items-center justify-center">
          {/* Left Side (Text) */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400">
              <span className="">Shivam Gaur</span>
            </h1>
            <h2 className="text-2xl bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent md:text-3xl lg:text-4xl mt-3">
              <p>Web Developer</p>
            </h2>
            <p className="mt-4 text-gray-500 text-[12px] sm:text-xs md:text-sm lg:text-base max-w-md sm:max-w-lg md:max-w-xl leading-tight sm:leading-normal">
              I'm a passionate Full Stack Web Developer skilled in JavaScript,
              React, Node.js, Express, and MongoDB. I specialize in building
              interactive, scalable, and high-performance web applications with
              a focus on clean UI, responsive design, and seamless user
              experience.
            </p>

            <a href="#contact">
              <button className="mt-6 cursor-pointer border border-blue-800 px-7 py-3 sm:px-8 sm:py-3 bg-transparent text-white rounded-xl shadow-sm shadow-blue-600 hover:shadow-purple-800 transition-all duration-300 transform text-xs sm:text-sm md:text-base">
                Contact Me
              </button>
            </a>
          </motion.div>

          {/* Right Side (Image) */}
          <div className="mt-10 md:mt-0 md:ml-12">
            <motion.img
              src={image}
              alt="Shivam"
              className="w-60 select-none h-60 md:w-80 md:h-[100%] object-cover rounded-full shadow-md hover:shadow-lg shadow-blue-600 hover:shadow-purple-800 transition-all duration-300 hover:scale-102"
              animate={{
                y: [0, -30, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse", // scroll oscillation
              }}
            />
          </div>
        </div>
        <div>
          <ScrollIndicator target="#skills" />
        </div>
      </div>

      {/* Scroll indicator */}
    </div>
  );
};

export default Hero;
