import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has touch capability
    if (window.matchMedia("(pointer: coarse)").matches) {
      return; // Do not show custom cursor on touch devices
    }

    const moveCursor = (e) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    
    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === "a" ||
        e.target.tagName.toLowerCase() === "button" ||
        e.target.closest("a") ||
        e.target.closest("button") ||
        window.getComputedStyle(e.target).cursor === "pointer"
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };
    
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer subtle glow */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-50 bg-signal/10 blur-xl hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          marginLeft: "-48px",
          marginTop: "-48px",
        }}
      />
      {/* Inner sharp dot */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-signal pointer-events-none z-50 flex items-center justify-center mix-blend-difference hidden md:flex"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? "rgba(45, 212, 191, 0.2)" : "transparent"
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div 
          className="w-1.5 h-1.5 bg-signal rounded-full"
          animate={{ scale: isPointer ? 0 : 1 }}
        />
      </motion.div>
    </>
  );
}
