import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { RiStackFill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";
import { FaServer } from "react-icons/fa6";
import { HiCheckBadge } from "react-icons/hi2";
import { IoRocketSharp } from "react-icons/io5";
import { useNav } from "../../hooks/useNav";
import Section from "../../components/Section";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Reveal from "../../components/Reveal";

export const servicesData = [
  {
    id: 1,
    title: "Full-Stack Development",
    shadow_icon: RiStackFill,
    iconColor: "#a855f7",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    description:
      "End-to-end web application development, from UI to backend APIs, databases, and deployment.",
  },
  {
    id: 2,
    title: "UI/UX Implementation",
    shadow_icon: MdDesignServices,
    iconColor: "#f43f5e",
    gradient: "from-pink-500 via-rose-500 to-orange-500",
    description:
      "Turning Figma and design systems into pixel-perfect, user-friendly interfaces with smooth interactions.",
  },
  {
    id: 3,
    title: "API Development",
    shadow_icon: FaServer,
    iconColor: "#3b82f6",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    description:
      "Designing secure, scalable REST APIs with proper validation, authentication, and performance optimization.",
  },
  {
    id: 4,
    title: "Website Maintenance",
    shadow_icon: HiMiniWrenchScrewdriver,
    iconColor: "#14b8a6",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    description:
      "Ongoing support, bug fixes, feature enhancements, and dependency upgrades.",
  },
  {
    id: 5,
    title: "Testing & Code Quality",
    shadow_icon: HiCheckBadge,
    iconColor: "#fbbf24",
    gradient: "from-amber-500 via-yellow-500 to-lime-500",
    description:
      "Writing unit, integration, and end-to-end tests to ensure stability, reliability, and maintainable code.",
  },
  {
    id: 6,
    title: "Deployment & Support",
    shadow_icon: IoRocketSharp,
    iconColor: "#f97316",
    gradient: "from-red-500 via-orange-500 to-amber-500",
    description:
      "Deploying applications using CI/CD pipelines, cloud platforms, and containerized environments.",
  },
];

// Magnetic button effect
const MagneticButton = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.15;
    const distanceY = (e.clientY - centerY) * 0.15;
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      {children}
    </motion.div>
  );
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    rotateX: -15,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 1,
      duration: 0.8,
    },
  },
  hover: {
    y: -15,
    rotateX: 2,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  },
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: [0.4, 0.7, 0.4],
    scale: [1, 1.3, 1],
    transition: {
      delay: 0.5,
      duration: 4,
      repeat: Infinity,
      repeatDelay: 2,
      ease: "easeInOut",
    },
  },
};

const rippleVariants = {
  hidden: { scale: 0, opacity: 0.5 },
  visible: {
    scale: 4,
    opacity: 0,
    transition: {
      delay: 1,
      duration: 2,
      repeat: Infinity,
      repeatDelay: 3,
    },
  },
};

const badgeItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.05,
      delay: 0.4,
    },
  },
};

const Services = () => {
  const serviceRef = useNav("Services");

  return (
    <Section
      sectionRef={serviceRef}
      id="servicesSection"
      variant="light"
      title1={"What"}
      title2={"I Offer."}
      description={
        "Transform your vision into reality with my comprehensive suite of services. I combine cutting-edge technology with creative design to deliver exceptional digital experiences."
      }>
      <motion.div
        className="grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px 0px -30px 0px" }}>
        {servicesData.map((service, index) => {
          const Icon = service.shadow_icon;
          return (
            <Reveal direction="up" delay={0.1 * index} key={service.id}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="group perspective-1000">
                <div className="relative bg-gradient-to-br from-bl via-bl/95 to-bl/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-8 overflow-hidden border border-indigo-500/30 shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_10px_rgba(99,102,241,0.3)] transition-all duration-500 transform-gpu preserve-3d flex flex-col h-full min-h-[250px]">
                  {/* Animated background glow */}
                  <motion.div
                    className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${service.gradient} blur-3xl pointer-events-none`}
                    variants={glowVariants}
                    animate="visible"
                    initial="hidden"
                  />

                  {/* Ripple effect */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/5"
                    variants={rippleVariants}
                  />

                  {/* Floating particles */}
                  {[1, 2, 3].map((particle) => (
                    <motion.div
                      key={particle}
                      className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${service.gradient} opacity-60`}
                      animate={{
                        y: [0, -30, 0],
                        x: [0, (particle - 2) * 10, 0],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + particle,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: particle * 0.5,
                      }}
                      style={{
                        top: `${20 + particle * 20}%`,
                        left: `${10 + particle * 25}%`,
                      }}
                    />
                  ))}

                  {/* Card content */}
                  <div className="relative z-10 flex flex-col items-start  flex-grow">
                    {/* Icon with magnetic effect */}
                    <MagneticButton className="mb-4">
                      <motion.div
                        className="w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]"
                        style={{
                          background: `linear-gradient(135deg, ${service.iconColor}20 0%, ${service.iconColor}05 100%)`,
                          boxShadow: `-6px -6px 20px rgba(99, 102, 241, 0.15), 6px 6px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                        }}>
                        <Icon
                          className="w-8 h-8  md:w-10 md:h-10 "
                          style={{ color: service.iconColor }}
                        />
                      </motion.div>
                    </MagneticButton>

                    {/* Title with gradient accent */}
                    <motion.h3
                      className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 relative inline-block"
                      variants={badgeItemVariants}>
                      {service.title}
                      <motion.div
                        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${service.gradient}`}
                        initial={{ width: "0%" }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-gray-300 text-left text-sm leading-relaxed mb-2 md:mb-3 h-8 md:h-16"
                      variants={badgeItemVariants}>
                      {service.description}
                    </motion.p>

                    {/* Feature badges */}
                    <motion.div
                      className="flex flex-wrap gap-2 mt-auto pt-2 md:pt-3"
                      variants={badgeItemVariants}>
                      <span
                        className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent font-semibold border border-white/10`}>
                        Expert Level
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-bl/50 text-gray-300 border border-indigo-500/20">
                        Available
                      </span>
                    </motion.div>

                    {/* Bottom decorative line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient}`}
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>

                  {/* Corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${service.gradient} opacity-10 rounded-bl-full`}
                  />
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </motion.div>
    </Section>
  );
};

export default Services;
