import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Placeholder = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.05, 0.3], [1, 25]);

  return (
    <div className="empty-div">
      <motion.div className="circle" style={{ scale }}></motion.div>
      <div className="title">Something</div>
    </div>
  );
};

export default Placeholder;
