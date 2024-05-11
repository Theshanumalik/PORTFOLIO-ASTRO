import { motion } from "framer-motion";
import { type ClassValue } from "clsx";
import { cn } from "../lib/util";

type ImageAnimationProps = {
  src: string;
  wrapperClassName?: ClassValue;
  imageClassName?: ClassValue;
  alt: string;
};

const ImageAnimation = ({
  src,
  wrapperClassName,
  imageClassName,
  alt,
}: ImageAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5, scale: 1.2, rotate: -5 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      transition={{ duration: 1 }}
      className={cn("", wrapperClassName)}
    >
      <img src={src} className={cn("", imageClassName)} alt={alt} />
    </motion.div>
  );
};

export default ImageAnimation;
