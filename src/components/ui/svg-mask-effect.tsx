"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 200, // Reduced from 600 to 200 for a smaller effect
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const updateMousePosition = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      });
    }
  };

  // Set default position to center of element when first rendered
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ 
        x: rect.width / 2, 
        y: rect.height / 2 
      });
    }
  }, []);

  const maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={updateMousePosition}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative w-full h-full overflow-hidden cursor-none", className)}
      initial={false}
      animate={{
        backgroundColor: isHovered ? "var(--slate-900)" : "transparent", 
      }}
    >
      {/* Back layer - only visible when not hovered */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {revealText}
      </motion.div>

      {/* Mask layer - always present, reveals content through the mask */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black bg-grid-white/[0.2] text-white [mask-image:url(/mask.svg)] [mask-size:10px] [mask-repeat:no-repeat] z-10"
        initial={false}
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2}px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{ duration: 0, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="max-w-4xl mx-auto text-center text-white relative z-20 p-4">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};