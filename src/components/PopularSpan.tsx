"use client";
import React from "react";
import { motion } from "framer-motion";

const PopularSpan = () => {
  return (
    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
      <motion.span
        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
        animate={{
          backgroundPositionX: "100%",
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        Popular
      </motion.span>
    </div>
  );
};

export default PopularSpan;
