import { motion, useScroll, useTransform } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Download, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "./ui/button";
import type { Screen } from "../App";
import ekenaImage from "figma:asset/2c0d37e3310934fd97e9d1ed0e98c1ba231982d1.png";
import ranjaImage from "figma:asset/e01ac8a9c56d74404d978be3c241d2b00ae63ebb.png";

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

const skillsData = [
  { skill: "Frontend", Ekena: 6, Ranja: 9 },
  { skill: "Backend", Ekena: 9, Ranja: 7 },
  { skill: "Base de données", Ekena: 8, Ranja: 6 },
  { skill: "Mobile", Ekena: 7, Ranja: 5 },
  { skill: "DevOps", Ekena: 6, Ranja: 4 },
  { skill: "Testing", Ekena: 7, Ranja: 6 },
];

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <div className="min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 lg:mb-8"
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
            transition={{ duration: 4, repeat: Infinity }}
          >
            Etudiants en informatique
          </motion.h1>
          <motion.div
            className="w-32 h-1 mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg, #f39c12, #e67e22)",
              boxShadow: "0 0 20px rgba(243, 156, 18, 0.5)",
            }}
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.p
            className="text-lg sm:text-xl mt-4 lg:mt-6 opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.5 }}
          >
            créer le futur à travers la technologie
          </motion.p>
        </motion.div>

        {/* Hero Profiles Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 md:mb-16 lg:mb-20 items-center">
          {/* Ekena Profile - LEFT LAYOUT */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ y: y1 }}
          >
            <div className="flex flex-col lg:flex-row items-center">
              {/* Large Hero Image */}
              <motion.div
                className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[400px] mb-6 lg:mb-0 lg:mr-8 flex-shrink-0"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg, #1a0033, #0066ff)",
                    padding: "4px",
                  }}
                >
                  <div className="w-full h-full rounded-3xl overflow-hidden relative">
                    <img
                      src={ekenaImage}
                      alt="Ekena"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      style={{
                        filter: "brightness(1.1) contrast(1.1) saturate(1.1)",
                      }}
                    />
                    {/* Breathing glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(26, 0, 51, 0.3), rgba(0, 102, 255, 0.3))",
                        mixBlendMode: "overlay",
                      }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </div>

                {/* Floating icons around image */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #f39c12, #e67e22)",
                    boxShadow: "0 0 30px rgba(243, 156, 18, 0.5)",
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Star className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>

              {/* Floating Text Overlay */}
              <div className="flex-1 space-y-4 lg:space-y-6 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3
                    className="text-2xl sm:text-3xl lg:text-4xl mb-3"
                    style={{
                      background: "linear-gradient(135deg, #0066ff, #00d2d3)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 10px rgba(0, 102, 255, 0.3))",
                    }}
                  >
                    Ekena
                  </h3>
                  <p
                    className="text-lg sm:text-xl mb-4 lg:mb-6"
                    style={{
                      background: "linear-gradient(135deg, #ff4757, #ff6b35)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Spécialiste en Backend
                  </p>
                </motion.div>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {[
                    {
                      label: "Langages & Frameworks",
                      value: "Django, Python, Java, C#, PHP, Kivy",
                    },
                    {
                      label: "Base de données",
                      value: "MySQL, PostgreSQL, SQLite",
                    },
                    { label: "Outils", value: "GitHub, Git, Docker" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-2xl backdrop-blur-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(26, 0, 51, 0.3), rgba(0, 102, 255, 0.2))",
                        border: "1px solid rgba(0, 102, 255, 0.3)",
                      }}
                    >
                      <h4
                        className="text-lg mb-2"
                        style={{
                          background:
                            "linear-gradient(135deg, #00d2d3, #01a3a4)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {item.label}
                      </h4>
                      <p className="text-white/80">{item.value}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <Button
                    className="px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden group"
                    style={{
                      background:
                        "linear-gradient(135deg, #0066ff 0%, #00d2d3 50%, #1a0033 100%)",
                      border: "none",
                      color: "#ffffff",
                      boxShadow: "0 15px 40px rgba(0, 102, 255, 0.4)",
                    }}
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/cv_Ekena.pdf";
                      link.download = "cv_Ekena.pdf";
                      link.click();
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative flex items-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télecharger son CV
                    </span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Ranja Profile - RIGHT LAYOUT */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ y: y2 }}
          >
            <div className="flex flex-col-reverse lg:flex-row items-center">
              {/* Floating Text Overlay - Right Aligned */}
              <div className="flex-1 space-y-4 lg:space-y-6 text-center lg:text-right lg:mr-8 mt-6 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center lg:text-right"
                >
                  <h3
                    className="text-2xl sm:text-3xl lg:text-4xl mb-3"
                    style={{
                      background: "linear-gradient(135deg, #ff4757, #ff6b35)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 10px rgba(255, 71, 87, 0.3))",
                    }}
                  >
                    Ranja
                  </h3>
                  <p
                    className="text-lg sm:text-xl mb-4 lg:mb-6"
                    style={{
                      background: "linear-gradient(135deg, #00d2d3, #01a3a4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Spécialiste en Frontend
                  </p>
                </motion.div>

                <motion.div
                  className="space-y-3 lg:space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {[
                    {
                      label: "Langages & Frameworks",
                      value: "ReactJS, Python, Java, JavaScript, HTML/CSS",
                    },
                    {
                      label: "Base de données et outils",
                      value: "PostgreSql, MySQL,SqLite, GitHub, Figma",
                    },
                    {
                      label: "Specialisations",
                      value: "UI/UX Design, Web Design responsive",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-2xl backdrop-blur-lg text-right"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255, 71, 87, 0.2), rgba(255, 107, 53, 0.1))",
                        border: "1px solid rgba(255, 71, 87, 0.3)",
                      }}
                    >
                      <h4
                        className="text-lg mb-2"
                        style={{
                          background:
                            "linear-gradient(135deg, #f39c12, #e67e22)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {item.label}
                      </h4>
                      <p className="text-white/80">{item.value}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="text-right"
                >
                  <Button
                    className="px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden group"
                    style={{
                      background:
                        "linear-gradient(135deg, #ff4757 0%, #ff6b35 50%, #f39c12 100%)",
                      border: "none",
                      color: "#ffffff",
                      boxShadow: "0 15px 40px rgba(255, 71, 87, 0.4)",
                    }}
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/cv_Ranja.pdf";
                      link.download = "cv_Ranja.pdf";
                      link.click();
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative flex items-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télecharger son CV
                    </span>
                  </Button>
                </motion.div>
              </div>

              {/* Large Hero Image */}
              <motion.div
                className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[400px] flex-shrink-0"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg, #ff4757, #ff6b35)",
                    padding: "4px",
                  }}
                >
                  <div className="w-full h-full rounded-3xl overflow-hidden relative">
                    <img
                      src={ranjaImage}
                      alt="Ranja"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      style={{
                        filter: "brightness(1.1) contrast(1.1) saturate(1.1)",
                      }}
                    />
                    {/* Breathing glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255, 71, 87, 0.3), rgba(255, 107, 53, 0.3))",
                        mixBlendMode: "overlay",
                      }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    />
                  </div>
                </div>

                {/* Floating icons around image */}
                <motion.div
                  className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #00d2d3, #01a3a4)",
                    boxShadow: "0 0 30px rgba(0, 210, 211, 0.5)",
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-block p-8 rounded-3xl backdrop-blur-lg relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(243, 156, 18, 0.1), rgba(230, 126, 34, 0.1))",
              border: "2px solid rgba(243, 156, 18, 0.3)",
              boxShadow: "0 20px 60px rgba(243, 156, 18, 0.2)",
            }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "linear-gradient(45deg, #f39c12, #e67e22, #ff4757, #0066ff, #00d2d3)",
                backgroundSize: "400% 400%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.h2
                className="text-3xl mb-6"
                style={{
                  background: "linear-gradient(135deg, #f39c12, #e67e22)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Prêt pour voir nos travails ?
              </motion.h2>

              <Button
                size="lg"
                className="px-12 py-6 text-xl rounded-full transition-all duration-500 hover:scale-110 cursor-pointer relative overflow-hidden group"
                style={{
                  background:
                    "linear-gradient(135deg, #f39c12 0%, #e67e22 25%, #ff4757 50%, #0066ff 75%, #00d2d3 100%)",
                  border: "none",
                  color: "#ffffff",
                  boxShadow: "0 20px 50px rgba(243, 156, 18, 0.5)",
                }}
                onClick={() => onNavigate("menu")}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 opacity-50"
                  style={{
                    background:
                      "linear-gradient(45deg, #f39c12, #e67e22, #ff4757, #0066ff, #00d2d3)",
                    backgroundSize: "400% 400%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="relative flex items-center">
                  Découvrir nos projet
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </motion.div>
                </span>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Mastery Section - Moved to Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-20"
        >
          <div className="flex justify-center">
            <div
              className="p-12 rounded-3xl backdrop-blur-lg relative"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 210, 211, 0.2), rgba(1, 163, 164, 0.1))",
                border: "2px solid rgba(0, 210, 211, 0.3)",
                boxShadow: "0 25px 70px rgba(0, 210, 211, 0.3)",
              }}
            >
              <motion.h3
                className="text-center text-4xl mb-10"
                style={{
                  background: "linear-gradient(135deg, #00d2d3, #01a3a4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 20px rgba(0, 210, 211, 0.3))",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Comparaison de compétence
              </motion.h3>

              <div className="w-full max-w-md mx-auto">
                <ResponsiveContainer width="100%" height={350}>
                  <RadarChart data={skillsData}>
                    <PolarGrid
                      gridType="polygon"
                      stroke="rgba(0, 210, 211, 0.4)"
                      strokeWidth={2}
                    />
                    <PolarAngleAxis
                      dataKey="skill"
                      tick={{ fill: "#ffffff", fontSize: 16 }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 10]}
                      tick={{ fill: "#ffffff", fontSize: 14 }}
                      stroke="rgba(0, 210, 211, 0.6)"
                    />
                    <Radar
                      name="Ekena"
                      dataKey="Ekena"
                      stroke="#0066ff"
                      fill="rgba(0, 102, 255, 0.3)"
                      fillOpacity={0.4}
                      strokeWidth={4}
                    />
                    <Radar
                      name="Ranja"
                      dataKey="Ranja"
                      stroke="#ff4757"
                      fill="rgba(255, 71, 87, 0.3)"
                      fillOpacity={0.4}
                      strokeWidth={4}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mt-8">
                <div className="flex items-center">
                  <motion.div
                    className="w-6 h-6 rounded-full mr-4"
                    style={{
                      background: "linear-gradient(135deg, #1a0033, #0066ff)",
                      boxShadow: "0 0 20px rgba(0, 102, 255, 0.6)",
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-white text-xl">
                    Ekena - Spécialiste en Backend
                  </span>
                </div>
                <div className="flex items-center">
                  <motion.div
                    className="w-6 h-6 rounded-full mr-4"
                    style={{
                      background: "linear-gradient(135deg, #ff4757, #ff6b35)",
                      boxShadow: "0 0 20px rgba(255, 71, 87, 0.6)",
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <span className="text-white text-xl">
                    Ranja - Spécialiste en Frontend
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
