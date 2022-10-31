import { useTime, useTransform, motion } from "framer-motion";

export const AnimatedHover = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.9 }}
      transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedGesture = ({ children }) => {
  return (
    <motion.div
      // whileHover={{ scale: 1.2, rotate: 90 }}
      whileHover={{
        scale: 0.9,
        rotate: -5,
        borderRadius: "100%",
      }}
      // whileTap={{
      //   scale: 0.8,
      //   rotate: -90,
      //   borderRadius: "100%",
      // }}
      whileTap={{
        scale: 1,
        rotate: 0,
        borderRadius: "100%",
      }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedRotate = ({ children }) => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return <motion.div style={{ rotate }}>{children}</motion.div>;
};
