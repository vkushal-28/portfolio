import CommonHeader from "./CommonHeader";
import clsx from "clsx";

const Section = ({
  sectionRef,
  id,
  variant = "light", // "light" | "dark"
  title1,
  title2,
  description,
  children,
}) => {
  const isDark = variant === "dark";

  return (
    <section
      ref={sectionRef}
      id={id}
      className={clsx(
        "h-fit text-center",
        !isDark &&
          "bg-blLight py-20 md:py-32 rounded-tl-none md:rounded-tl-[100px] rounded-br-none md:rounded-br-[100px]"
      )}>
      {isDark ? (
        <div className="bg-blLight">
          <div
            className={clsx(
              "bg-bl py-20 md:py-32 rounded-tl-none md:rounded-tl-[100px] rounded-br-none",
              id !== "contactSection" && "md:rounded-br-[100px]"
            )}>
            <div className="container mx-auto transition-all delay-150">
              <CommonHeader
                title1={title1}
                title2={title2}
                description={description}
              />
              {children}
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto transition-all delay-150">
          <CommonHeader
            title1={title1}
            title2={title2}
            description={description}
          />
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
