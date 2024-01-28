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
            <ul className="list-disc ">
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
          startDate={"July 2019"}
          endDate={"Jan 2023"}
          description={
            <ul className="list-disc ">
              <li>
                Developed 15+ dynamic and 100% responsive user interface using
                React JS, including the implementation of React Hooks, Context
                APIs, state management with Redux for efficient data flow and
                application control.
              </li>
              <li>
                Implemented 2+ e-commerce and 5+ web application based on
                server-side rendering with Next JS to enhance 99% application
                performance and SEO optimization.
              </li>
              <li>
                Collaborated on server-side scripting using Node.js and
                Express.js to the creation of Restful backend APIs / interface
                in 5+ live projects and Implemented 15+ secure authentication
                with OAuth and JWT (JSON Web Tokens) for data transmission
                security in both Front-end and Back-end.
              </li>
              <li>
                Worked with 2+ databases like MongoDB and GraphQL to provide
                100% efficient data storage and retrieval.
              </li>
              <li>
                Demonstrated critical thinking, problem-solving and analytical
                programming skills to solve 98.26% technical complex problems
                and contribute to innovative solutions.
              </li>
            </ul>
          }
        />
      </ol>
    </div>
  );
};

export default Experience;
