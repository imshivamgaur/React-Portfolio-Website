import React from "react";
import { motion } from "framer-motion";

const ScrollIndicator = ({ target }) => {
  
  return (
    // {/* Navigate to next page */}
    <div className=" mt-20  w-full flex justify-center items-center ">
      <a href={target}>
        <div className="w-[30px] h-[64px] border-2 flex justify-center items-start p-2 border-gray-200 rounded-full ">
          <motion.div
            animate={{
              y: [0, 30, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-gray-100"
          />
        </div>
      </a>
    </div>
  );
};

export default ScrollIndicator;
