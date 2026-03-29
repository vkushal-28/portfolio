import { motion } from "framer-motion";

const skillCardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const SkillCard = ({ skill, techStack, imageUrl }) => {
  const skillData = techStack[skill];
  if (!skillData) return null;

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center h-fit rounded-lg md:rounded-2xl p-3 md:p-3 gap-2 md:gap-x-2 cursor-pointer relative overflow-hidden group"
      variants={skillCardVariants}
      whileHover="hover"
      style={{
        boxShadow: `0 8px 32px -8px ${skillData.shadow_color}50`,
        background: `linear-gradient(165deg, rgba(15,15,35,0.95) 0%, rgba(10,10,25,0.9) 100%)`,
        border: `1px solid rgba(255,255,255,0.08)`,
      }}>
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${skillData.shadow_color}aa, transparent)`,
        }}
      />
      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${skillData.shadow_color}aa, transparent)`,
        }}
      />

      {/* Top-left corner accent blob */}
      <div
        className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-3xl opacity-20"
        style={{
          background: skillData.shadow_color,
        }}
      />

      {/* Bottom-right corner subtle highlight */}
      <div
        className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-15"
        style={{
          background: skillData.shadow_color,
        }}
      />

      <motion.img
        src={`${imageUrl}skills/${skillData.image}`}
        alt={`skill-${skillData.name}`}
        className="h-7 md:h-8 relative z-10"
        width={32}
        height={32}
        loading="lazy"
        whileHover={{
          rotate: 360,
          transition: { duration: 0.7 },
        }}
      />
      <p className="font-medium text-xs sm:text-sm lg:text-base relative z-10 text-gray-100 tracking-wide">
        {skillData.name}
      </p>
    </motion.div>
  );
};

export default SkillCard;
