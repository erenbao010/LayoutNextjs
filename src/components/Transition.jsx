"use client";
import { animate, delay, motion } from "framer-motion";
import React from "react";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};
function Transition() {
  return (
    <div>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen w-screen z-30 bg-purple-500 "
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0, duration: 0.2, ease: "easeOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen w-screen z-20 bg-purple-500 "
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0, duration: 0.4, ease: "easeOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen w-screen z-10 bg-purple-500 "
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0, duration: 0.4, ease: "easeOut" }}
      ></motion.div>
    </div>
  );
}

export default Transition;
