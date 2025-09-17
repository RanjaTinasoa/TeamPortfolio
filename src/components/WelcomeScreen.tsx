import { motion } from "motion/react";
import { ArrowRight, Code, Palette, Server } from "lucide-react";
import { Button } from "./ui/button";

interface WelcomeScreenProps {
  onEnter: () => void;
}

export function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(26, 0, 51, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 102, 255, 0.6) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(255, 71, 87, 0.4) 0%, transparent 50%),
            linear-gradient(135deg, #0f0f23 0%, #1a0033 50%, #0f0f23 100%)
          `,
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `linear-gradient(45deg, 
              ${
                i % 4 === 0
                  ? "#00d2d3"
                  : i % 4 === 1
                  ? "#0066ff"
                  : i % 4 === 2
                  ? "#ff4757"
                  : "#f39c12"
              }, 
              ${
                i % 4 === 0
                  ? "#01a3a4"
                  : i % 4 === 1
                  ? "#1a0033"
                  : i % 4 === 2
                  ? "#ff6b35"
                  : "#e67e22"
              })`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border-2 rounded-full opacity-20"
        style={{ borderColor: "#00d2d3" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 rotate-45 opacity-20"
        style={{ borderColor: "#ff4757" }}
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        {/* Logo/Title Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl mb-6"
            style={{
              background:
                "linear-gradient(135deg, #0066ff 0%, #00d2d3 50%, #ff4757 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(0, 102, 255, 0.3))",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Portfolio
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p
            className="text-2xl md:text-3xl mb-8"
            style={{
              color: "#ffffff",
              textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
            }}
          >
            Équipe d'étudiants en informatique
          </p>
        </motion.div>

        {/* Tech Icons */}
        <motion.div
          className="flex justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {[
            { icon: Code, color: "#0066ff" },
            { icon: Palette, color: "#ff4757" },
            { icon: Server, color: "#00d2d3" },
          ].map(({ icon: Icon, color }, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-full backdrop-blur-lg border"
              style={{
                background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                borderColor: color,
                boxShadow: `0 0 30px ${color}40`,
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                y: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                rotate: { duration: 4, repeat: Infinity, delay: index * 0.3 },
              }}
            >
              <Icon
                className="w-8 h-8"
                style={{
                  color,
                  filter: `drop-shadow(0 0 10px ${color})`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enter Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <Button
            size="lg"
            onClick={onEnter}
            className="px-12 py-6 text-xl relative overflow-hidden group cursor-pointer"
            style={{
              background:
                "linear-gradient(135deg, #0066ff 0%, #00d2d3 50%, #ff4757 100%)",
              border: "none",
              borderRadius: "50px",
              color: "#ffffff",
              boxShadow: "0 10px 40px rgba(0, 102, 255, 0.3)",
              textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative flex items-center">
              Enter Portfolio
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6 ml-3" />
              </motion.div>
            </span>
          </Button>
        </motion.div>

        {/* Skip Option */}
        <motion.p
          className="mt-6 text-sm opacity-60 cursor-pointer hover:opacity-100 transition-opacity"
          style={{ color: "#ffffff" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 3 }}
          onClick={onEnter}
        >
          ou appuyez sur n'importe quelle touche pour ignorer
        </motion.p>
      </div>
    </div>
  );
}
