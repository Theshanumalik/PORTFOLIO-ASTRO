import { motion } from "framer-motion";

const Hifi = () => {
  return (
    <motion.span
      initial={{ opacity: 0.4, y: -5, scale: 2 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.5, y: -5 }}
      transition={{
        duration: 0.3,
        type: "smooth",
        stiffness: 100,
        damping: 10,
        mass: 0.5,
        bounce: 0.5,
        velocity: 0.5,
        dampingRatio: 0.5,
        durationKey: "default",
      }}
      className="inline-block text-4xl cursor-pointer"
    >
      👋
    </motion.span>
  );
};

export default Hifi;
