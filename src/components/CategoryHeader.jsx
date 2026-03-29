import { motion } from "framer-motion";

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
};

const CategoryHeader = ({ category }) => {
  const label = categoryLabels[category] || category;

  return (
    <div className="w-fit lg:w-[12%] mb-5 lg:mb-0">
      <motion.div
        className="relative rounded-xl overflow-hidden backdrop-blur-sm h-fit"
        whileHover={{ scale: 1.03, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}>
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(145deg, rgba(26,26,67,0.85) 0%, rgba(26,26,67,0.8) 100%)`,
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      />
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(120,120,255,0.4), transparent)`,
        }}
      />
      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(120,120,255,0.4), transparent)`,
        }}
      />
      {/* Text content */}
      <div className="relative z-10 px-3 md:p-3.5 text-center">
        <span className="font-semibold text-sm lg:text-base text-gray-100 capitalize tracking-wide">
          {label}
        </span>
      </div>
      </motion.div>
    </div>
  );
};

export default CategoryHeader;
