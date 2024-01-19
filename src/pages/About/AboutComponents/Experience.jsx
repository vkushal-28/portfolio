import { FaLaptop } from "react-icons/fa";
import ExperienceTimelineCard from "./ExperienceTimelineCard";

const Experience = () => {
  return (
    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
      <ol className="relative border-s border-gray-200 dark:border-pink-200">
        <ExperienceTimelineCard
          role={"Front End Developer"}
          companyName={"Saturncube Technologies"}
          isLatest={true}
          startDate={"start date"}
          endDate={"start date"}
          description={"description"}
        />{" "}
        <ExperienceTimelineCard
          role={"Front End Developer"}
          companyName={"Saturncube Technologies"}
          isLatest={false}
          startDate={"start date"}
          endDate={"start date"}
          description={"description"}
        />{" "}
        <ExperienceTimelineCard
          role={"Front End Developer"}
          companyName={"Saturncube Technologies"}
          isLatest={false}
          startDate={"start date"}
          endDate={"start date"}
          description={"description"}
        />
      </ol>
    </div>
  );
};

export default Experience;
