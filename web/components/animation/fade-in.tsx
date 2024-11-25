"use client"

import { motion } from "framer-motion";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  initial?: any;
  animate?: any;
  transition?: object;
}

const FadeIn: React.FC<AnimatedWrapperProps> = ({
  children,
  initial = { opacity: 0, y: 10 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.3 },
}) => {
  return (
    <motion.div initial={initial} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
};

export default FadeIn;
