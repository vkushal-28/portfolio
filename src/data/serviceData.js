import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { RiStackFill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";
import { FaServer } from "react-icons/fa6";
import { HiCheckBadge } from "react-icons/hi2";
import { IoRocketSharp } from "react-icons/io5";

export const servicesData = [
  {
    id: 1,
    title: "Full-Stack Development",
    shadow_icon: RiStackFill,
    description:
      "End-to-end web application development, from UI to backend APIs, databases, and deployment.",
  },
  {
    id: 2,
    title: "UI/UX Implementation",
    shadow_icon: MdDesignServices,
    description:
      "Turning Figma and design systems into pixel-perfect, user-friendly interfaces with smooth interactions.",
  },
  {
    id: 3,
    title: "API Development",
    shadow_icon: FaServer,

    description:
      "Designing secure, scalable REST APIs with proper validation, authentication, and performance optimization.",
  },
  // {
  //   id: 4,
  //   icon: api,
  //   title: "Performance Optimization",
  //   shadow_icon: "fa-solid fa-gear",
  //   // shadow_icon: "fa-solid fa-gear",
  //   description:
  //     "Improving load times, rendering performance, and Core Web Vitals for better SEO and user experience.",
  // },
  {
    id: 5,
    title: "Website & App Maintenance",
    shadow_icon: HiMiniWrenchScrewdriver,

    description:
      "Ongoing support, bug fixes, feature enhancements, and dependency upgrades.",
  },
  {
    id: 6,
    title: "Testing & Code Quality",
    shadow_icon: HiCheckBadge,

    description:
      "Writing unit, integration, and end-to-end tests to ensure stability, reliability, and maintainable code.",
  },
  {
    id: 7,
    title: "Deployment & Support",
    shadow_icon: IoRocketSharp,
    description:
      "Deploying applications using CI/CD pipelines, cloud platforms, and containerized environments.",
  },
];
