import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import type { Screen } from "../App";

interface MenuScreenProps {
  onNavigate: (screen: Screen) => void;
}

const projects = [
  {
    id: "timetable",
    title: "Gestion d'emploi du temps",
    subtitle: "Emploi du temps académique simple",
    description:
      "Un système intelligent de gestion des horaires pour les établissements d'enseignement avec détection des conflits et optimisation automatique.",
    image:
      "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0aW1ldGFibGUlMjBzY2hlZHVsZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTc2NzU0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "employee",
    title: "Gestion de salarié",
    subtitle: "Gestion simplifiée des effectifs",
    description:
      "Un système complet de gestion des employés avec suivi des présences, analyse des performances et automatisation des RH.",
    image:
      "https://images.unsplash.com/photo-1654166602082-d18e7cd4bdac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3Njc1NDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "water",
    title: " Gestion de paiement de l'eau et de l'électricité",
    subtitle: "Surveillance de paiement des services publics",
    description:
      "Une application de suivi des services publics pour surveiller la consommation d'eau et d'électricité.",
    image:
      "https://images.unsplash.com/photo-1636535572625-9b766ed3771a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGVsZWN0cmljaXR5JTIwdXRpbGl0eSUyMGFwcHxlbnwxfHx8fDE3NTc2NzU0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function MenuScreen({ onNavigate }: MenuScreenProps) {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-16"
        >
          <motion.button
            onClick={() => onNavigate("home")}
            className="p-4 rounded-2xl transition-all duration-500 hover:scale-110 cursor-pointer backdrop-blur-lg relative overflow-hidden group"
            style={{
              background:
                "linear-gradient(135deg, rgba(26, 0, 51, 0.4), rgba(0, 102, 255, 0.3))",
              border: "2px solid rgba(0, 102, 255, 0.4)",
              color: "#ffffff",
              boxShadow: "0 15px 40px rgba(0, 102, 255, 0.4)",
            }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <ArrowLeft className="w-6 h-6 relative z-10" />
          </motion.button>

          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-6xl mb-6"
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
              Nos Projets
            </motion.h1>
            <motion.div
              className="w-32 h-1 mx-auto rounded-full"
              style={{
                background: "linear-gradient(90deg, #f39c12, #e67e22)",
                boxShadow: "0 0 20px rgba(243, 156, 18, 0.5)",
              }}
              animate={{
                scaleX: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.p
              className="text-xl mt-4 opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.5 }}
            >
              L'innovation rencontre l'exécution
            </motion.p>
          </div>

          <motion.button
            onClick={() => onNavigate("contact")}
            className="p-4 rounded-2xl transition-all duration-500 hover:scale-110 cursor-pointer backdrop-blur-lg relative overflow-hidden group"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 71, 87, 0.4), rgba(255, 107, 53, 0.3))",
              border: "2px solid rgba(255, 71, 87, 0.4)",
              color: "#ffffff",
              boxShadow: "0 15px 40px rgba(255, 71, 87, 0.4)",
            }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Contact</span>
          </motion.button>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -20,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="group cursor-pointer"
            >
              <div
                className="relative overflow-hidden rounded-3xl backdrop-blur-lg transition-all duration-500 h-full"
                style={{
                  background: `linear-gradient(135deg, 
                    ${
                      index % 3 === 0
                        ? "rgba(26, 0, 51, 0.3), rgba(0, 102, 255, 0.2)"
                        : index % 3 === 1
                        ? "rgba(255, 71, 87, 0.3), rgba(255, 107, 53, 0.2)"
                        : "rgba(0, 210, 211, 0.3), rgba(1, 163, 164, 0.2)"
                    }
                  )`,
                  border: `2px solid ${
                    index % 3 === 0
                      ? "rgba(0, 102, 255, 0.3)"
                      : index % 3 === 1
                      ? "rgba(255, 71, 87, 0.3)"
                      : "rgba(0, 210, 211, 0.3)"
                  }`,
                  boxShadow: `0 20px 60px ${
                    index % 3 === 0
                      ? "rgba(0, 102, 255, 0.2)"
                      : index % 3 === 1
                      ? "rgba(255, 71, 87, 0.2)"
                      : "rgba(0, 210, 211, 0.2)"
                  }`,
                }}
              >
                {/* Project Image */}
                <div className="relative h-72 overflow-hidden rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    style={{
                      filter: "brightness(0.9) contrast(1.2) saturate(1.1)",
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, 
                        ${
                          index % 3 === 0
                            ? "rgba(26, 0, 51, 0.7), rgba(0, 102, 255, 0.3)"
                            : index % 3 === 1
                            ? "rgba(255, 71, 87, 0.7), rgba(255, 107, 53, 0.3)"
                            : "rgba(0, 210, 211, 0.7), rgba(1, 163, 164, 0.3)"
                        }
                      )`,
                      opacity: 0.3,
                    }}
                  />

                  {/* Hover Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <motion.h3
                    className="text-2xl mb-3"
                    style={{
                      background: `linear-gradient(135deg, 
                        ${
                          index % 3 === 0
                            ? "#0066ff, #00d2d3"
                            : index % 3 === 1
                            ? "#ff4757, #ff6b35"
                            : "#00d2d3, #01a3a4"
                        }
                      )`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {project.title}
                  </motion.h3>

                  <p
                    className="text-lg mb-4"
                    style={{
                      background: "linear-gradient(135deg, #f39c12, #e67e22)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {project.subtitle}
                  </p>

                  <p className="text-white/80 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <Button
                    className="w-full py-4 text-lg rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden group/btn"
                    style={{
                      background: `linear-gradient(135deg, 
                        ${
                          index % 3 === 0
                            ? "#0066ff 0%, #00d2d3 50%, #1a0033 100%"
                            : index % 3 === 1
                            ? "#ff4757 0%, #ff6b35 50%, #f39c12 100%"
                            : "#00d2d3 0%, #01a3a4 50%, #0066ff 100%"
                        }
                      )`,
                      border: "none",
                      color: "#ffffff",
                      boxShadow: `0 15px 40px ${
                        index % 3 === 0
                          ? "rgba(0, 102, 255, 0.4)"
                          : index % 3 === 1
                          ? "rgba(255, 71, 87, 0.4)"
                          : "rgba(0, 210, 211, 0.4)"
                      }`,
                    }}
                    onClick={() => onNavigate(project.id as Screen)}
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
                        background: `linear-gradient(45deg, 
                          ${
                            index % 3 === 0
                              ? "#0066ff, #00d2d3, #1a0033"
                              : index % 3 === 1
                              ? "#ff4757, #ff6b35, #f39c12"
                              : "#00d2d3, #01a3a4, #0066ff"
                          }
                        )`,
                        backgroundSize: "300% 300%",
                      }}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <span className="relative flex items-center justify-center">
                      Explorer le projet
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5 ml-3" />
                      </motion.div>
                    </span>
                  </Button>
                </div>

                {/* Enhanced Hover Glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    boxShadow: `
                      0 0 80px ${
                        index % 3 === 0
                          ? "rgba(0, 102, 255, 0.4)"
                          : index % 3 === 1
                          ? "rgba(255, 71, 87, 0.4)"
                          : "rgba(0, 210, 211, 0.4)"
                      },
                      0 0 120px ${
                        index % 3 === 0
                          ? "rgba(0, 102, 255, 0.2)"
                          : index % 3 === 1
                          ? "rgba(255, 71, 87, 0.2)"
                          : "rgba(0, 210, 211, 0.2)"
                      }
                    `,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20"
        >
          <motion.h2
            className="text-4xl mb-12 text-center"
            style={{
              background: "linear-gradient(135deg, #f39c12, #e67e22)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px rgba(243, 156, 18, 0.3))",
            }}
          >
            Download Our Applications
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Stock Management System Download */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div
                className="p-8 rounded-3xl backdrop-blur-lg transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 71, 87, 0.3), rgba(255, 107, 53, 0.2))",
                  border: "2px solid rgba(255, 71, 87, 0.3)",
                  boxShadow: "0 20px 60px rgba(255, 71, 87, 0.2)",
                }}
              >
                <h3
                  className="text-2xl mb-4"
                  style={{
                    background: "linear-gradient(135deg, #ff4757, #ff6b35)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Système de gestion des stocks
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Application C# WPF de Ranja pour une gestion complète des
                  stocks avec suivi en temps réel et rapports automatisés.
                </p>
                <Button
                  className="w-full py-4 text-lg rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden group/btn"
                  style={{
                    background:
                      "linear-gradient(135deg, #ff4757 0%, #ff6b35 50%, #f39c12 100%)",
                    border: "none",
                    color: "#ffffff",
                    boxShadow: "0 15px 40px rgba(255, 71, 87, 0.4)",
                  }}
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/CyberOne.zip";
                    link.download = "CyberOne.zip";
                    link.click();
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative flex items-center justify-center">
                    <Download className="w-5 h-5 mr-3" />
                    Télecharger l'Application
                  </span>
                </Button>
              </div>
            </motion.div>

            {/* Brick Breaker Game Download */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div
                className="p-8 rounded-3xl backdrop-blur-lg transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 102, 255, 0.3), rgba(0, 210, 211, 0.2))",
                  border: "2px solid rgba(0, 102, 255, 0.3)",
                  boxShadow: "0 20px 60px rgba(0, 102, 255, 0.2)",
                }}
              >
                <h3
                  className="text-2xl mb-4"
                  style={{
                    background: "linear-gradient(135deg, #0066ff, #00d2d3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Jeu de casse-briques
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Un jeu d'arcade d'Ekena basé sur Python, doté d'une physique
                  dynamique.{" "}
                </p>
                <Button
                  className="w-full py-4 text-lg rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden group/btn"
                  style={{
                    background:
                      "linear-gradient(135deg, #0066ff 0%, #00d2d3 50%, #1a0033 100%)",
                    border: "none",
                    color: "#ffffff",
                    boxShadow: "0 15px 40px rgba(0, 102, 255, 0.4)",
                  }}
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/cassebrique.zip";
                    link.download = "cassebrique.zip";
                    link.click();
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative flex items-center justify-center">
                    <Download className="w-5 h-5 mr-3" />
                    Télecharger le jeu
                  </span>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Hint */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-block p-6 rounded-2xl backdrop-blur-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(243, 156, 18, 0.1), rgba(230, 126, 34, 0.1))",
              border: "1px solid rgba(243, 156, 18, 0.3)",
            }}
          >
            <motion.p
              className="text-xl"
              style={{
                background: "linear-gradient(135deg, #f39c12, #e67e22)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✨ Découvrez les histoires derrière chaque innovation ✨
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
