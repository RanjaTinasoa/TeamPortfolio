import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  CheckCircle,
  User,
  Database,
  Server,
  BarChart3,
  Code,
  Palette,
  Maximize2,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import type { Screen } from "../App";

interface ProjectScreenProps {
  project: "timetable" | "employee" | "water";
  onNavigate: (screen: Screen) => void;
}

const projectData = {
  timetable: {
    title: "Système d'Emploi du Temps Intelligent",
    subtitle: "Planification académique simplifiée",
    description: "",
    image:
      "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0aW1ldGFibGUlMjBzY2hlZHVsZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTc2NzU0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    // Screenshots spécifiques au projet timetable
    screenshots: [
      {
        id: 1,
        src: "/screenshots/timetable/edtsalle.PNG",
        alt: "",
        title: "Page des salles",
      },
      {
        id: 2,
        src: "/screenshots/timetable/edtprof.PNG",
        alt: "",
        title: "Page des profs",
      },
      {
        id: 3,
        src: "/screenshots/timetable/edtinsertion.PNG",
        alt: "",
        title: "Insertion de l'edt",
      },
      {
        id: 4,
        src: "/screenshots/timetable/voiredtclasse.PNG",
        alt: "",
        title: "Voir l'edt classe",
      },
      {
        id: 5,
        src: "/screenshots/timetable/edtgeneral.PNG",
        alt: "",
        title: "Voir l'edt générel",
      },
      {
        id: 6,
        src: "/screenshots/timetable/edtpdf.PNG",
        alt: "",
        title: "Génération PDF",
      },
    ],
    features: [
      {
        icon: CheckCircle,
        text: "Notre système intelligent de détection de conflits identifie automatiquement les chevauchements de planification et suggère des alternatives optimales en temps réel.",
      },
      {
        icon: BarChart3,
        text: "Allocation optimisée des ressources (salles/profs/classes).",
      },
      {
        icon: Database,
        text: "Visualisation de l'emploi du temps par classe et l'emploi du temps général",
      },
      {
        icon: Code,
        text: "Génération de documents professionnels (PDF).",
      },
      {
        icon: Palette,
        text: "Travail collaboratif autour d'une architecture MVC.",
      },
    ],
    narrative:
      "Quand nous avons d'abord rencontré la nature chaotique de la planification académique, Ekena s'est immédiatement plongé dans l'architecture d'une solution backend évolutive utilisant Java. Son expertise en optimisation de base de données avec PostgreSQL a créé la fondation pour gérer des algorithmes de planification complexes. Simultanément, Ranja s'est concentré sur l'expérience utilisateur, développant l'interface qui transformaient les données de planification complexes en interfaces visuelles intuitives. Ensemble, nous avons résolu le défi fondamental de la résolution de conflits en temps réel grâce à des approches algorithmiques innovantes.",
    ranjaRole: [
      "Développement Frontend",
      "Conception UI/UX",
      "Visualisation de Données",
      "Architecture MVC",
    ],
    ekenaRole: ["Développement API Backend", "Conception de Base de Données"],
  },
  employee: {
    title: "Hub de Gestion des Employés",
    subtitle: "Gestion rationalisée de la main-d'œuvre",
    description:
      "Ce projet a émergé de la reconnaissance des défis complexes de la gestion moderne de la main-d'œuvre. Ekena a architecturé un backend sécurisé et évolutif utilisant C# et SQL Server. Ranja a conçu et développé des interfaces de tableau de bord complètes, créant des composants de visualisation de données interactifs.",
    image:
      "https://images.unsplash.com/photo-1654166602082-d18e7cd4bdac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3Njc1NDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    // Screenshots spécifiques au projet employee
    screenshots: [
      {
        id: 1,
        src: "/screenshots/employee/sallogin.PNG",
        alt: "",
        title: "login",
      },
      {
        id: 2,
        src: "/screenshots/employee/salposte.PNG",
        alt: "",
        title: "page des postes",
      },
      {
        id: 3,
        src: "/screenshots/employee/salemploye.PNG",
        alt: "",
        title: "interface des employés",
      },
      {
        id: 4,
        src: "/screenshots/employee/salfacture.PNG",
        alt: "",
        title: "vue d'un facture",
      },
      {
        id: 5,
        src: "/screenshots/employee/salfichepaie.PNG",
        alt: "",
        title: "Fiche de paie",
      },
      {
        id: 6,
        src: "/screenshots/employee/salstats.PNG",
        alt: "",
        title: "statistiques",
      },
    ],
    features: [
      {
        icon: User,
        text: "Ajout, modification et suppression des informations personnelles.",
      },
      {
        icon: BarChart3,
        text: "Suivi des postes, primes et retenues.",
      },
      {
        icon: CheckCircle,
        text: "Calcul des paiements mensuels.",
      },
      {
        icon: Database,
        text: "Intégration transparente de la paie avec calculs automatisés, déductions fiscales et rapports financiers complets.",
      },
      {
        icon: Server,
        text: "Visualisation des factures générées avec impression des factures.",
      },
      {
        icon: Code,
        text: "Pourcentage de salaire par employé et répartition des employés par poste.",
      },
    ],
    narrative:
      "Ekena a pris en charge l'infrastructure backend, implémentant des mesures de sécurité robustes et concevant des schémas de base de données capables de gérer efficacement des milliers d'enregistrements d'employés. Son expertise en C# et optimisation de base de données a créé un système capable de traiter des calculs de paie complexes en temps réel. Ranja s'est concentré sur l'interface utilisateur, développant des tableaux de bord intuitifs qui rendaient les données RH complexes accessibles aux gestionnaires de tous niveaux.",
    ranjaRole: [
      "Développement de Tableau de Bord",
      "Visualisation de Données",
      "Réactivité Mobile",
      "Module de Statistiques",
    ],
    ekenaRole: [
      "Architecture de Base de Données",
      "Développement Backend",
      "Implémentation de Sécurité",
      "Migration de Données",
    ],
  },
  water: {
    title: "Traceur d'Eau et d'Électricité",
    subtitle: "Surveillance intelligente des services publics",
    description:
      "Ce projet innovant a commencé quand nous avons reconnu le besoin urgent de gestion intelligente des services publics dans une ère de coûts énergétiques croissants et de conscience environnementale.Ekena s'est chargé de l'intégration des données, du fonctionnement du système et Ranja a développé des interfaces de visualisation dynamiques, construisant des composants de graphiques.",
    image:
      "https://images.unsplash.com/photo-1636535572625-9b766ed3771a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3YXRlciUyMGVsZWN0cmljaXR5JTIwdXRpbGl0eSUyMGFwcHxlbnwxfHx8fDE3NTc2NzU0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    // Screenshots spécifiques au projet water
    screenshots: [
      {
        id: 1,
        src: "/screenshots/water/jirama.PNG",
        alt: "",
        title: "Page des clients",
      },
      {
        id: 2,
        src: "/screenshots/water/jiracompteur.PNG",
        alt: "",
        title: "Page des compteurs",
      },
      {
        id: 3,
        src: "/screenshots/water/jirarecherche.PNG",
        alt: "",
        title: "Recherche",
      },
      {
        id: 4,
        src: "/screenshots/water/jirafacture.PNG",
        alt: "",
        title: "vue d'une facture",
      },
      {
        id: 5,
        src: "/screenshots/water/jirapdf.PNG",
        alt: "",
        title: "pdf imprimé",
      },
      {
        id: 6,
        src: "/screenshots/water/notifier.PNG",
        alt: "",
        title: "notification par mail",
      },
    ],
    features: [
      {
        icon: BarChart3,
        text: "Création, modification, suppression et recherche de clients et un client peut avoir plusieurs compteurs (électricité ou eau).",
      },
      {
        icon: Database,
        text: "Relevés pour l'électricité (kWh) et pour l'eau (m³) et saisie des dates de relevé, de présentation et de limite de paiement..",
      },
      {
        icon: CheckCircle,
        text: "Calcul automatique du montant dû (prix unitaire × consommation).Édition et téléchargement des factures en PDF.Historique des trois dernières factures d'un client.Gestion des paiements et suivi des factures impayées.",
      },
      {
        icon: Server,
        text: "Liste automatique des clients n'ayant pas encore payé dans un mois donné.Envoi d'e-mails de rappel aux clients concernés.",
      },
      {
        icon: Code,
        text: "Recherche avancée de clients par nom ou autre critère.Tri des tableaux par colonnes en un clic.",
      },
      {
        icon: Palette,
        text: "La rigueur technique (architecture MVC, base de données relationnelle, intégration backend/frontend).L'expérience utilisateur avec une interface intuitive et claire.L'automatisation des tâches répétitives (facturation PDF, calculs automatiques, mails de notification).La valeur pratique pour toute organisation souhaitant optimiser la gestion des services publics.",
      },
    ],
    narrative:
      "Ekena s'est plongé profondément dans l'implémentation d'un backend robuste capable de gérer des données continues. Ranja s'est concentré sur la création d'une expérience utilisateur intuitive, développant des graphiques en temps réel et des tableaux de bord interactifs qui rendaient les données complexes de services publics accessibles aux utilisateurs du service public.",
    ranjaRole: [
      "Composants de Graphiques",
      "Tableau de Bord Temps Réel",
      "Système de Notification",
      "Interface Mobile",
    ],
    ekenaRole: [
      "implémentation Backend",
      "Optimisation de Base de Données",
      "Logique de Facturation",
    ],
  },
};

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

export function ProjectScreen({ project, onNavigate }: ProjectScreenProps) {
  const data = projectData[project];
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  const openModal = (screenshot: {
    src: string;
    alt: string;
    title: string;
  }) => {
    setSelectedImage(screenshot);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
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

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-6xl mb-4"
            style={{
              background:
                "linear-gradient(135deg, #ff4757 0%, #ff6b35 50%, #0066ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(255, 71, 87, 0.3))",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {data.title}
          </motion.h1>
          <p
            className="text-2xl mb-6"
            style={{
              background: "linear-gradient(135deg, #f39c12, #e67e22)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {data.subtitle}
          </p>
          <motion.div
            className="w-32 h-1 mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg, #00d2d3, #01a3a4)",
              boxShadow: "0 0 20px rgba(0, 210, 211, 0.5)",
            }}
            animate={{
              scaleX: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Project Image */}
        <AnimatedSection delay={0.4}>
          <div
            className="mb-16 rounded-3xl overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, #00d2d3, #01a3a4)",
              padding: "4px",
            }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-80 md:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                style={{
                  filter: "brightness(0.9) contrast(1.2) saturate(1.1)",
                }}
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 210, 211, 0.3), rgba(1, 163, 164, 0.3))",
                  mixBlendMode: "overlay",
                }}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection delay={0.6}>
          <div
            className="p-10 mb-16 rounded-3xl backdrop-blur-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(26, 0, 51, 0.3), rgba(0, 102, 255, 0.2))",
              border: "2px solid rgba(0, 102, 255, 0.3)",
              boxShadow: "0 20px 60px rgba(0, 102, 255, 0.2)",
            }}
          >
            <p className="text-xl leading-relaxed text-center text-white">
              {data.description}
            </p>
          </div>
        </AnimatedSection>

        {/* Narrative Section */}
        <AnimatedSection delay={0.7}>
          <div
            className="p-10 mb-16 rounded-3xl backdrop-blur-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 71, 87, 0.3), rgba(255, 107, 53, 0.2))",
              border: "2px solid rgba(255, 71, 87, 0.3)",
              boxShadow: "0 20px 60px rgba(255, 71, 87, 0.2)",
            }}
          >
            <h2
              className="text-3xl mb-8 text-center"
              style={{
                background: "linear-gradient(135deg, #f39c12, #e67e22)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Notre parcours de développement
            </h2>
            <p className="text-lg leading-relaxed text-white/90">
              {data.narrative}
            </p>
          </div>
        </AnimatedSection>

        {/* Features */}
        <AnimatedSection delay={0.8}>
          <div className="mb-16">
            <h2
              className="text-4xl mb-12 text-center"
              style={{
                background: "linear-gradient(135deg, #0066ff, #00d2d3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 20px rgba(0, 102, 255, 0.3))",
              }}
            >
              Faits marquants de l'innovation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group cursor-pointer"
                >
                  <div
                    className="p-8 h-full rounded-3xl backdrop-blur-lg transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, 
                        ${
                          index % 3 === 0
                            ? "rgba(0, 210, 211, 0.2), rgba(1, 163, 164, 0.1)"
                            : index % 3 === 1
                            ? "rgba(243, 156, 18, 0.2), rgba(230, 126, 34, 0.1)"
                            : "rgba(26, 0, 51, 0.2), rgba(0, 102, 255, 0.1)"
                        }
                      )`,
                      border: `2px solid ${
                        index % 3 === 0
                          ? "rgba(0, 210, 211, 0.3)"
                          : index % 3 === 1
                          ? "rgba(243, 156, 18, 0.3)"
                          : "rgba(0, 102, 255, 0.3)"
                      }`,
                      boxShadow: `0 20px 40px ${
                        index % 3 === 0
                          ? "rgba(0, 210, 211, 0.2)"
                          : index % 3 === 1
                          ? "rgba(243, 156, 18, 0.2)"
                          : "rgba(0, 102, 255, 0.2)"
                      }`,
                    }}
                  >
                    <feature.icon
                      className="w-12 h-12 mb-6 transition-all duration-300 group-hover:scale-110"
                      style={{
                        color:
                          index % 3 === 0
                            ? "#00d2d3"
                            : index % 3 === 1
                            ? "#f39c12"
                            : "#0066ff",
                        filter: `drop-shadow(0 0 15px ${
                          index % 3 === 0
                            ? "#00d2d3"
                            : index % 3 === 1
                            ? "#f39c12"
                            : "#0066ff"
                        })`,
                      }}
                    />
                    <p className="leading-relaxed text-white/90">
                      {feature.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Team Roles */}
        <AnimatedSection delay={1.0}>
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Ranja's Role */}
            <div
              className="p-10 backdrop-blur-lg rounded-3xl transition-all duration-300 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 71, 87, 0.3), rgba(255, 107, 53, 0.2))",
                border: "2px solid rgba(255, 71, 87, 0.3)",
                boxShadow: "0 20px 60px rgba(255, 71, 87, 0.2)",
              }}
            >
              <h3
                className="text-3xl mb-6 flex items-center"
                style={{
                  background: "linear-gradient(135deg, #f39c12, #e67e22)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <User
                  className="w-8 h-8 mr-4"
                  style={{
                    color: "#f39c12",
                    filter: "drop-shadow(0 0 10px #f39c12)",
                  }}
                />
                L'expertise de Ranja
              </h3>
              <ul className="space-y-4">
                {data.ranjaRole.map((role, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + index * 0.1 }}
                    className="flex items-center text-lg text-white/90"
                  >
                    <CheckCircle
                      className="w-6 h-6 mr-4 flex-shrink-0"
                      style={{
                        color: "#ff4757",
                        filter: "drop-shadow(0 0 8px #ff4757)",
                      }}
                    />
                    {role}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Ekena's Role */}
            <div
              className="p-10 backdrop-blur-lg rounded-3xl transition-all duration-300 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 102, 255, 0.3), rgba(0, 210, 211, 0.2))",
                border: "2px solid rgba(0, 102, 255, 0.3)",
                boxShadow: "0 20px 60px rgba(0, 102, 255, 0.2)",
              }}
            >
              <h3
                className="text-3xl mb-6 flex items-center"
                style={{
                  background: "linear-gradient(135deg, #0066ff, #00d2d3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <Server
                  className="w-8 h-8 mr-4"
                  style={{
                    color: "#0066ff",
                    filter: "drop-shadow(0 0 10px #0066ff)",
                  }}
                />
                L'expertise d'Ekena
              </h3>
              <ul className="space-y-4">
                {data.ekenaRole.map((role, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + index * 0.1 }}
                    className="flex items-center text-lg text-white/90"
                  >
                    <CheckCircle
                      className="w-6 h-6 mr-4 flex-shrink-0"
                      style={{
                        color: "#00d2d3",
                        filter: "drop-shadow(0 0 8px #00d2d3)",
                      }}
                    />
                    {role}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Screenshots Section */}
        <AnimatedSection delay={1.0}>
          <div className="mb-16">
            <h2
              className="text-4xl mb-12 text-center"
              style={{
                background: "linear-gradient(135deg, #00d2d3, #01a3a4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 20px rgba(0, 210, 211, 0.3))",
              }}
            >
              Captures d'écran de l'application
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.screenshots.map((screenshot, index) => (
                <motion.div
                  key={screenshot.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div
                    className="relative h-64 rounded-2xl backdrop-blur-lg transition-all duration-300 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, 
                        ${
                          index % 3 === 0
                            ? "rgba(0, 102, 255, 0.2), rgba(0, 210, 211, 0.1)"
                            : index % 3 === 1
                            ? "rgba(255, 71, 87, 0.2), rgba(255, 107, 53, 0.1)"
                            : "rgba(243, 156, 18, 0.2), rgba(230, 126, 34, 0.1)"
                        }
                      )`,
                      border: `2px solid ${
                        index % 3 === 0
                          ? "rgba(0, 102, 255, 0.3)"
                          : index % 3 === 1
                          ? "rgba(255, 71, 87, 0.3)"
                          : "rgba(243, 156, 18, 0.3)"
                      }`,
                      boxShadow: `0 10px 30px ${
                        index % 3 === 0
                          ? "rgba(0, 102, 255, 0.2)"
                          : index % 3 === 1
                          ? "rgba(255, 71, 87, 0.2)"
                          : "rgba(243, 156, 18, 0.2)"
                      }`,
                    }}
                    onClick={() => openModal(screenshot)}
                  >
                    {/* IMAGE RÉELLE ICI */}
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                      onError={(e) => {
                        // Si l'image ne charge pas, afficher un placeholder
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling.style.display =
                          "flex";
                      }}
                    />

                    {/* Fallback placeholder si l'image ne charge pas */}
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ display: "none" }}
                    >
                      <div className="text-center">
                        <motion.div
                          className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, 
                              ${
                                index % 3 === 0
                                  ? "#0066ff, #00d2d3"
                                  : index % 3 === 1
                                  ? "#ff4757, #ff6b35"
                                  : "#f39c12, #e67e22"
                              }
                            )`,
                            boxShadow: `0 0 20px ${
                              index % 3 === 0
                                ? "rgba(0, 102, 255, 0.4)"
                                : index % 3 === 1
                                ? "rgba(255, 71, 87, 0.4)"
                                : "rgba(243, 156, 18, 0.4)"
                            }`,
                          }}
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        >
                          <Maximize2 className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Overlay avec titre */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3
                          className="text-xl mb-2"
                          style={{
                            background: `linear-gradient(135deg, 
                              ${
                                index % 3 === 0
                                  ? "#0066ff, #00d2d3"
                                  : index % 3 === 1
                                  ? "#ff4757, #ff6b35"
                                  : "#f39c12, #e67e22"
                              }
                            )`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {screenshot.title}
                        </h3>
                        <p className="text-white/70 text-sm"></p>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Modal pour afficher les captures d'écran en grand */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "rgba(0, 0, 0, 0.9)",
              backdropFilter: "blur(10px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-6xl max-h-[90vh] w-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton de fermeture */}
              <motion.button
                className="absolute top-4 right-4 z-10 p-3 rounded-full backdrop-blur-lg transition-all duration-300 hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 71, 87, 0.8), rgba(255, 107, 53, 0.6))",
                  border: "2px solid rgba(255, 71, 87, 0.6)",
                  color: "#ffffff",
                  boxShadow: "0 10px 30px rgba(255, 71, 87, 0.4)",
                }}
                onClick={closeModal}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Conteneur de l'image */}
              <div
                className="rounded-3xl overflow-hidden relative"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 210, 211, 0.1))",
                  border: "3px solid rgba(0, 210, 211, 0.5)",
                  boxShadow: "0 25px 80px rgba(0, 210, 211, 0.3)",
                }}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain max-h-[80vh]"
                  style={{
                    filter: "brightness(1.1) contrast(1.1)",
                  }}
                />

                {/* Titre en bas de l'image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3
                    className="text-2xl mb-2"
                    style={{
                      background: "linear-gradient(135deg, #00d2d3, #01a3a4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 10px rgba(0, 210, 211, 0.5))",
                    }}
                  >
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/80">{selectedImage.alt}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
