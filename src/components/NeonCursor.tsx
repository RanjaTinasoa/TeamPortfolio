import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function EnhancedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"], input, .cursor-pointer')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"], input, .cursor-pointer')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main cursor circle with gradient */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: isHovering 
            ? 'linear-gradient(135deg, #0066ff, #00d2d3, #ff4757)'
            : 'linear-gradient(135deg, #f39c12, #e67e22)',
          boxShadow: `
            0 0 20px ${isHovering ? 'rgba(0, 102, 255, 0.6)' : 'rgba(243, 156, 18, 0.6)'},
            0 0 40px ${isHovering ? 'rgba(0, 210, 211, 0.4)' : 'rgba(243, 156, 18, 0.4)'},
            0 0 60px ${isHovering ? 'rgba(255, 71, 87, 0.3)' : 'rgba(230, 126, 34, 0.3)'}
          `,
          opacity: isHovering ? 0.9 : 0.7,
        }}
      />

      {/* Outer glow ring with animated gradient */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
          scale: isHovering ? 1.4 : 0.9,
          opacity: isHovering ? 0.6 : 0.3,
          rotate: 360,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
          opacity: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" }
        }}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'conic-gradient(from 0deg, #0066ff, #00d2d3, #f39c12, #ff4757, #0066ff)',
          padding: '2px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'rgba(15, 15, 35, 0.8)',
          }}
        />
      </motion.div>

      {/* Dynamic light trails */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-30"
          animate={{
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                rotate: [i * 60, (i * 60) + 360],
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              style={{
                width: '100px',
                height: '100px',
                left: '50px',
                top: '50px',
                transformOrigin: '0 0',
              }}
            >
              <div
                style={{
                  width: '3px',
                  height: '20px',
                  background: `linear-gradient(180deg, 
                    ${i % 3 === 0 ? '#0066ff' : i % 3 === 1 ? '#00d2d3' : '#ff4757'}, 
                    transparent
                  )`,
                  boxShadow: `0 0 15px ${i % 3 === 0 ? '#0066ff' : i % 3 === 1 ? '#00d2d3' : '#ff4757'}`,
                  borderRadius: '2px',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}