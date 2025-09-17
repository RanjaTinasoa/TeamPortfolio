import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft,
  Mail,
  Phone,
  Github,
  Heart,
  Eye,
  Zap,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import type { Screen } from "../App";

interface ContactScreenProps {
  onNavigate: (screen: Screen) => void;
}

const contactData = {
  ekena: {
    name: "Ekena",
    role: "Développeur Back-End",
    email: "rakotoson16@email.com",
    phone: "+261 38 66 147 70",
    github: "github.com/kentix",
  },
  ranja: {
    name: "Ranja",
    role: "Développeur Front-End",
    email: "ranjatinasoa@email.com",
    phone: "+261 38 10 006 00",
    github: "github.com/ranjatinasoa",
  },
};

const whyChooseUsData = [
  {
    icon: Heart,
    title: "Motivés",
    description:
      "Nous apportons passion et dévouement à chaque projet, garantissant des livrables de haute qualité et une amélioration continue.",
  },
  {
    icon: Eye,
    title: "Curieux",
    description:
      "Notre curiosité nous pousse à explorer de nouvelles technologies et des solutions innovantes pour les défis complexes.",
  },
  {
    icon: Zap,
    title: "Flexibles",
    description:
      "Nous nous adaptons rapidement aux exigences changeantes et adoptons de nouvelles méthodologies pour livrer des résultats optimaux.",
  },
  {
    icon: Users,
    title: "Esprit d'équipe solide",
    description:
      "Nos compétences complémentaires en développement frontend et backend créent une synergie puissante pour le succès du projet.",
  },
];

function AnimatedSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ContactScreen({ onNavigate }: ContactScreenProps) {
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
            onClick={() => onNavigate("menu")}
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
              Connectons-nous
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
          </div>

          <motion.button
            onClick={() => onNavigate("home")}
            className="p-4 rounded-2xl transition-all duration-300 hover:scale-110 cursor-pointer backdrop-blur-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 71, 87, 0.3), rgba(255, 107, 53, 0.2))",
              border: "2px solid rgba(255, 71, 87, 0.3)",
              color: "#ffffff",
              boxShadow: "0 10px 30px rgba(255, 71, 87, 0.3)",
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Accueil
          </motion.button>
        </motion.div>

        {/* Contact Cards */}
        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Ekena Contact */}
            <div
              className="p-10 backdrop-blur-lg rounded-3xl transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 102, 255, 0.3), rgba(0, 210, 211, 0.2))",
                border: "2px solid rgba(0, 102, 255, 0.3)",
                boxShadow: "0 20px 60px rgba(0, 102, 255, 0.2)",
              }}
            >
              <div className="text-center mb-10">
                <h3
                  className="text-4xl mb-4"
                  style={{
                    background: "linear-gradient(135deg, #0066ff, #00d2d3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {contactData.ekena.name}
                </h3>
                <p
                  className="text-xl"
                  style={{
                    background: "linear-gradient(135deg, #f39c12, #e67e22)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {contactData.ekena.role}
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center group">
                  <Mail
                    className="w-8 h-8 mr-6 transition-all duration-300 group-hover:scale-110"
                    style={{
                      color: "#00d2d3",
                      filter: "drop-shadow(0 0 15px #00d2d3)",
                    }}
                  />
                  <a
                    href={`mailto:${contactData.ekena.email}`}
                    className="hover:opacity-80 transition-all duration-300 text-xl cursor-pointer text-white/90"
                  >
                    {contactData.ekena.email}
                  </a>
                </div>

                <div className="flex items-center group">
                  <Phone
                    className="w-8 h-8 mr-6 transition-all duration-300 group-hover:scale-110"
                    style={{
                      color: "#00d2d3",
                      filter: "drop-shadow(0 0 15px #00d2d3)",
                    }}
                  />
                  <a
                    href={`tel:${contactData.ekena.phone}`}
                    className="hover:opacity-80 transition-all duration-300 text-xl cursor-pointer text-white/90"
                  >
                    {contactData.ekena.phone}
                  </a>
                </div>

                <div className="flex items-center group">
                  <Github
                    className="w-8 h-8 mr-6 transition-all duration-300 group-hover:scale-110"
                    style={{
                      color: "#00d2d3",
                      filter: "drop-shadow(0 0 15px #00d2d3)",
                    }}
                  />
                  <a
                    href={`https://${contactData.ekena.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-all duration-300 text-xl cursor-pointer text-white/90"
                  >
                    {contactData.ekena.github}
                  </a>
                </div>
              </div>
            </div>

            {/* Ranja Contact */}
            <div
              className="p-10 backdrop-blur-lg rounded-3xl transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 71, 87, 0.3), rgba(255, 107, 53, 0.2))",
                border: "2px solid rgba(255, 71, 87, 0.3)",
                boxShadow: "0 20px 60px rgba(255, 71, 87, 0.2)",
              }}
            >
              <div className="text-center mb-10">
                <h3
                  className="text-4xl mb-4"
                  style={{
                    background: "linear-gradient(135deg, #ff4757, #ff6b35)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {contactData.ranja.name}
                </h3>
                <p
                  className="text-xl"
                  style={{
                    background: "linear-gradient(135deg, #f39c12, #e67e22)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {contactData.ranja.role}
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center group">
                  <Mail
                    className="w-8 h-8 mr-6 transition-all duration-300 group-hover:scale-110"
                    style={{
                      color: "#ff6b35",
                      filter: "drop-shadow(0 0 15px #ff6b35)",
                    }}
                  />
                  <a
                    href={`mailto:${contactData.ranja.email}`}
                    className="hover:opacity-80 transition-all duration-300 text-xl cursor-pointer text-white/90"
                  >
                    {contactData.ranja.email}
                  </a>
                </div>

                <div className="flex items-center group">
                  <Phone
                    className="w-8 h-8 mr-6 transition-all duration-300 group-hover:scale-110"
                    style={{
                      color: "#ff6b35",
                      filter: "drop-shadow(0 0 15px #ff6b35)",
                    }}
                  />
                  <a
                    href={`tel:${contactData.ranja.phone}`}
                    className="hover:opacity-80 transition-all duration-300 text-xl cursor-pointer text-white/90"
                  >
                    {contactData.ranja.phone}
                  </a>
                </div>

                <div className="flex items-center group">
                  <Github
                    className="w-8 h-8 mr-6 transition-all duration-300 group-hover:scale-110"
                    style={{
                      color: "#ff6b35",
                      filter: "drop-shadow(0 0 15px #ff6b35)",
                    }}
                  />
                  <a
                    href={`https://${contactData.ranja.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-all duration-300 text-xl cursor-pointer text-white/90"
                  >
                    {contactData.ranja.github}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Choose Us Section */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mb-16">
            <h2
              className="text-5xl mb-8"
              style={{
                background: "linear-gradient(135deg, #00d2d3, #01a3a4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 20px rgba(0, 210, 211, 0.3))",
              }}
            >
              Pourquoi nous choisir ?
            </h2>
            <p
              className="text-xl max-w-4xl mx-auto leading-relaxed"
              style={{
                color: "#00ff9f",
                textShadow: "0 0 5px #00ff9f",
              }}
            >
              Nous sommes une équipe motivée d'étudiants en informatique
              passionnés par la technologie de pointe. Notre curiosité nous
              pousse à explorer des solutions innovantes, tandis que notre
              flexibilité nous permet de nous adapter à tout défi. Ensemble,
              nous combinons un art frontend puissant et une ingénierie backend
              robuste pour offrir des expériences numériques exceptionnelles qui
              repoussent les limites.
            </p>
          </div>
        </AnimatedSection>

        {/* Why Choose Us Cards */}
        <AnimatedSection delay={0.6}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="group cursor-pointer"
              >
                <div
                  className="p-10 h-full text-center backdrop-blur-lg rounded-3xl transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, 
                      ${
                        index % 4 === 0
                          ? "rgba(243, 156, 18, 0.2), rgba(230, 126, 34, 0.1)"
                          : index % 4 === 1
                          ? "rgba(0, 210, 211, 0.2), rgba(1, 163, 164, 0.1)"
                          : index % 4 === 2
                          ? "rgba(255, 71, 87, 0.2), rgba(255, 107, 53, 0.1)"
                          : "rgba(26, 0, 51, 0.2), rgba(0, 102, 255, 0.1)"
                      }
                    )`,
                    border: `2px solid ${
                      index % 4 === 0
                        ? "rgba(243, 156, 18, 0.3)"
                        : index % 4 === 1
                        ? "rgba(0, 210, 211, 0.3)"
                        : index % 4 === 2
                        ? "rgba(255, 71, 87, 0.3)"
                        : "rgba(0, 102, 255, 0.3)"
                    }`,
                    boxShadow: `0 20px 40px ${
                      index % 4 === 0
                        ? "rgba(243, 156, 18, 0.2)"
                        : index % 4 === 1
                        ? "rgba(0, 210, 211, 0.2)"
                        : index % 4 === 2
                        ? "rgba(255, 71, 87, 0.2)"
                        : "rgba(0, 102, 255, 0.2)"
                    }`,
                  }}
                >
                  <div
                    className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, 
                        ${
                          index % 4 === 0
                            ? "#f39c12, #e67e22"
                            : index % 4 === 1
                            ? "#00d2d3, #01a3a4"
                            : index % 4 === 2
                            ? "#ff4757, #ff6b35"
                            : "#0066ff, #1a0033"
                        }
                      )`,
                      boxShadow: `0 15px 30px ${
                        index % 4 === 0
                          ? "rgba(243, 156, 18, 0.4)"
                          : index % 4 === 1
                          ? "rgba(0, 210, 211, 0.4)"
                          : index % 4 === 2
                          ? "rgba(255, 71, 87, 0.4)"
                          : "rgba(0, 102, 255, 0.4)"
                      }`,
                    }}
                  >
                    <item.icon
                      className="w-12 h-12 text-white"
                      style={{
                        filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))",
                      }}
                    />
                  </div>

                  <h3
                    className="text-2xl mb-6"
                    style={{
                      background: `linear-gradient(135deg, 
                        ${
                          index % 4 === 0
                            ? "#f39c12, #e67e22"
                            : index % 4 === 1
                            ? "#00d2d3, #01a3a4"
                            : index % 4 === 2
                            ? "#ff4757, #ff6b35"
                            : "#0066ff, #00d2d3"
                        }
                      )`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-white/90">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection delay={0.8}>
          <div className="text-center mt-20">
            <div
              className="p-12 max-w-4xl mx-auto backdrop-blur-lg rounded-3xl transition-all duration-300 hover:scale-105"
              style={{
                background: `
                  radial-gradient(circle at 30% 30%, rgba(243, 156, 18, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 70% 70%, rgba(0, 210, 211, 0.3) 0%, transparent 50%),
                  linear-gradient(135deg, rgba(255, 71, 87, 0.2), rgba(0, 102, 255, 0.2))
                `,
                border: "2px solid rgba(243, 156, 18, 0.3)",
                boxShadow: "0 30px 80px rgba(243, 156, 18, 0.3)",
              }}
            >
              <h3
                className="text-4xl mb-8"
                style={{
                  background: "linear-gradient(135deg, #f39c12, #e67e22)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 20px rgba(243, 156, 18, 0.3))",
                }}
              >
                Prêt à créer quelque chose d'extraordinaire ?
              </h3>
              <p className="mb-10 text-xl leading-relaxed text-white/90">
                Collaborons sur votre prochain projet révolutionnaire. Nous
                apportons une expertise technique de pointe, une créativité
                innovante et un dévouement inébranlable pour transformer votre
                vision en réalité numérique.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <motion.button
                  className="px-10 py-5 rounded-2xl transition-all duration-500 hover:scale-110 cursor-pointer relative overflow-hidden group"
                  style={{
                    background:
                      "linear-gradient(135deg, #f39c12 0%, #e67e22 50%, #ff4757 100%)",
                    color: "#ffffff",
                    border: "none",
                    boxShadow: "0 20px 50px rgba(243, 156, 18, 0.5)",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                  onClick={() =>
                    (window.location.href = `mailto:${contactData.ekena.email},${contactData.ranja.email}`)
                  }
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
                        "linear-gradient(45deg, #f39c12, #e67e22, #ff4757)",
                      backgroundSize: "300% 300%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <span className="relative z-10 flex items-center">
                    <Mail className="w-6 h-6 mr-3" />
                    Écrivez-nous maintenant
                  </span>
                </motion.button>
                <motion.button
                  className="px-10 py-5 rounded-2xl transition-all duration-500 hover:scale-110 cursor-pointer backdrop-blur-lg relative overflow-hidden group"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0, 210, 211, 0.4), rgba(1, 163, 164, 0.3))",
                    border: "2px solid rgba(0, 210, 211, 0.6)",
                    color: "#ffffff",
                    boxShadow: "0 20px 50px rgba(0, 210, 211, 0.4)",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                  onClick={() => onNavigate("home")}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Explorer le Portfolio</span>
                </motion.button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
