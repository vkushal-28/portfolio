import { memo, useMemo } from "react";
import { useNav } from "../../hooks/useNav";
import Section from "../../components/Section";
import { containerVariants } from "../../utils/variants";
import { servicesData } from "../../data/servicesData";
import { RiStackFill } from "react-icons/ri";
import { FaServer } from "react-icons/fa6";
import { HiCheckBadge, HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { IoRocketSharp } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { motion } from "framer-motion";
import ServiceCard from "./components/ServiceCard";

const Services = memo(() => {
  const serviceRef = useNav("Services");

  // Create icon map for efficient lookup
  const iconMap = useMemo(
    () => ({
      RiStackFill,
      MdDesignServices,
      FaServer,
      HiMiniWrenchScrewdriver,
      HiCheckBadge,
      IoRocketSharp,
    }),
    [],
  );

  // Map services data to include icon components (memoized)
  const servicesWithIcons = useMemo(
    () =>
      servicesData.map((service) => ({
        ...service,
        Icon: iconMap[service.shadow_icon] || RiStackFill,
      })),
    [iconMap],
  );

  console.log(servicesWithIcons);

  return (
    <Section
      sectionRef={serviceRef}
      id="servicesSection"
      variant="light"
      title1="What"
      title2="I Offer."
      description="Transform your vision into reality with my comprehensive suite of services. I combine cutting-edge technology with creative design to deliver exceptional digital experiences.">
      <motion.div
        className="grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px 0px -30px 0px" }}>
        {servicesWithIcons.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </motion.div>
    </Section>
  );
});

Services.displayName = "Services";

export default Services;
