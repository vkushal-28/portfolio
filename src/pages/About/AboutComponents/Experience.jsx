import ExperienceTimelineCard from "./ExperienceTimelineCard";
import { experienceData } from "../../../data/experienceData";

const Experience = () => {
  return (
    <div className="py-2 px-1 md:px-2 xl:px-0 flex flex-col gap-y-2 xl:gap-y-4 items-start ">
      <ol className="relative border-s border-blue-40 dark:border-indigo-400 transition-all delay-150">
        {experienceData.length > 0 &&
          experienceData.map((experience, i) => {
            return (
              <ExperienceTimelineCard
                key={i}
                role={experience.role_name}
                companyName={experience.company_name}
                address={experience.address}
                startDate={experience.start_date}
                endDate={experience.end_date}
                description={experience.role_description}
                short_description={experience.short_description}
              />
            );
          })}
      </ol>
    </div>
  );
};

export default Experience;
