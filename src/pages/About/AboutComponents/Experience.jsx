import ExperienceTimelineCard from "./ExperienceTimelineCard";

const Experience = () => {
  return (
    <div className="py-2 px-3 xl:px-0 flex flex-col gap-y-2 xl:gap-y-4 items-start xl:items-start">
      <ol className="relative border-s border-gray-200 dark:border-pink-200">
        <ExperienceTimelineCard
          role={"Front End Developer"}
          companyName={"Sapratigs"}
          isLatest={true}
          startDate={"February 2023"}
          endDate={"Present"}
          description={
            <ul className="list-disc">
              <li>
                Developed dynamic and 100% responsive web apps using React JS
                and Next JS including the implementation of Hooks, Integrated
                state management with Redux for efficient data flow and
                application control.
              </li>
              <li>
                Designed responsive web application for a 100% visually engaging
                user experience using HTML5, CSS3, Bootstrap, Material-UI, and
                Tailwind CSS and more UI / UX components.
              </li>
              <li>
                Utilized JSX, and JavaScript (ES6+) to create 91.29% scalable
                and maintainable code.
              </li>
              <li>
                Utilized Git platforms like GitHub Actions, GitLab, pipelines,
                AWS and Bitbucket for version control system, continuous
                integration and deployment.
              </li>
            </ul>
          }
        />
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
