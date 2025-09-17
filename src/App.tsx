import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { HomeScreen } from "./components/HomeScreen";
import { MenuScreen } from "./components/MenuScreen";
import { ProjectScreen } from "./components/ProjectScreen";
import { ContactScreen } from "./components/ContactScreen";
import { EnhancedCursor } from "./components/NeonCursor";

export type Screen =
  | "welcome"
  | "home"
  | "menu"
  | "timetable"
  | "employee"
  | "water"
  | "contact";

const pageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 1.05 },
};

const pageTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  duration: 0.6,
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Hide default cursor for enhanced experience
    document.body.style.cursor = "none";
    document.documentElement.style.cursor = "none";

    // Auto-skip welcome screen after 4 seconds
    const timer = setTimeout(() => {
      if (currentScreen === "welcome") {
        handleEnterPortfolio();
      }
    }, 4000);

    // Skip on any key press
    const handleKeyPress = () => {
      if (currentScreen === "welcome") {
        handleEnterPortfolio();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyPress);
      document.body.style.cursor = "auto";
      document.documentElement.style.cursor = "auto";
    };
  }, [currentScreen]);

  const handleEnterPortfolio = () => {
    setShowWelcome(false);
    setCurrentScreen("home");
  };

  const renderScreen = () => {
    if (showWelcome) {
      return <WelcomeScreen onEnter={handleEnterPortfolio} />;
    }

    switch (currentScreen) {
      case "home":
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case "menu":
        return <MenuScreen onNavigate={setCurrentScreen} />;
      case "timetable":
        return (
          <ProjectScreen project="timetable" onNavigate={setCurrentScreen} />
        );
      case "employee":
        return (
          <ProjectScreen project="employee" onNavigate={setCurrentScreen} />
        );
      case "water":
        return <ProjectScreen project="water" onNavigate={setCurrentScreen} />;
      case "contact":
        return <ContactScreen onNavigate={setCurrentScreen} />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 10% 20%, rgba(26, 0, 51, 0.8) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0, 102, 255, 0.6) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(255, 71, 87, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 60% 70%, rgba(0, 210, 211, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, #0f0f23 0%, #1a0033 50%, #0f0f23 100%)
        `,
        color: "#ffffff",
      }}
    >
      {/* Textured Overlay */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Enhanced Custom Cursor */}
      <EnhancedCursor />

      {/* Dynamic Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full opacity-10"
          style={{
            background: "linear-gradient(135deg, #0066ff, #00d2d3)",
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/2 w-3/4 h-3/4 rounded-full opacity-10"
          style={{
            background: "linear-gradient(135deg, #ff4757, #ff6b35)",
          }}
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity },
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={showWelcome ? "welcome" : currentScreen}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="min-h-screen relative z-10"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
