import ExperienceTimelineCard from "./ExperienceTimelineCard";

const Credentials = () => {
  return (
    <div className="py-2 px-3 xl:px-0 flex flex-col gap-y-2 xl:gap-y-4 items-start xl:items-start">
      <ol className="relative border-s border-gray-200 dark:border-pink-200">
        <ExperienceTimelineCard
          role={"Master of Science in Information Technology"}
          companyName={"Shri M. M. Patel Inst. of Sciences and Research"}
          isLatest={true}
          startDate={"2016"}
          endDate={"2018"}
          description={
            <ul className="list-disc ">
              <li>
                Learned advanced programming skills in C, C++, Java, PHP, .NET
                and Javascript to build Softwares and web applications.
              </li>
              <li>
                Empowered frontend skilld in HTML5, CSS3, Bootstrap,
                Material-UI, and more UI / UX designs to make user friendly
                responsive web applications.
              </li>
              <li>
                Worked with Multiple databases like oracle, MySQL, SQL Server
                etc.
              </li>
              <li>
                Developed web applications for practice to improve my skills.
              </li>
            </ul>
          }
        />
        <ExperienceTimelineCard
          role={"Bachelor of Computer Applications"}
          companyName={"Gujarat University"}
          isLatest={false}
          startDate={"2013"}
          endDate={"2026"}
          description={
            <ul className="list-disc">
              <li>
                Learned basic level of programming skills in C, C++, Java, PHP,
                Javascript to build web applications.
              </li>
              <li>
                Learned frontend skilld in HTML5, CSS3, Bootstrap, Material-UI,
                and more UI / UX designs to make user friendly responsive web
                applications.
              </li>
              <li>
                Developed practice projects in C, C++, Java, HTML, CSS, and
                Javascript to improve my skills.
              </li>
            </ul>
          }
        />
      </ol>
    </div>
  );
};

export default Credentials;
