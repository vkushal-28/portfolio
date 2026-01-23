import PropTypes from "prop-types";
import { RiCss3Fill, RiJavascriptFill, RiReactjsFill } from "react-icons/ri";

const Certificates = () => {
  return (
    <div className="py-2 px-1 md:px-2 xl:px-0 flex flex-col gap-y-2 xl:gap-y-4 items-start xl:items-start transition-all delay-150 w-full pt-3">
      <ol className="relative">
        <li className="mb-6 ms-4 md:ms-8">
          <span className="absolute flex items-start justify-center w-6 h-6  md:w-8 md:h-8 rounded-full -start-3 ">
            <RiReactjsFill className="text-3xl text-cyan-500" />
          </span>
          <h3 className="flex items-center justify-between text-left mb-1 text-lg md:text-xl font-semibold  dark:text-cyan-500 w-full ml-2 ">
            Advanced React and Next.js
            {/* {isLatest && ( */}
            <span className="bg-blue-100 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 ms-3 cursor-pointer">
              <a
                href="https://www.udemy.com/certificate/UC-1e2dc70b-f2ef-4f9f-bb42-fd713dddb52a/"
                target="_blank"
                rel="noreferrer">
                View
              </a>
            </span>
          </h3>
          {/* <div className="flex items-start mb-1 text font-semibold  text-gray-900 dark:text-white ml-2">
            Source : <span className="italic text-blue-400"> Udemy</span>
          </div> */}

          <div className="mb-4 text-left ml-2">
            <p>
              React and Next.js certification focused on building
              scalable,reusable, component-driven UIs with hooks, context, and
              state management with Redux, plus server-side rendering, routing,
              data fetching, and optimization features in Next.js apps.
            </p>
          </div>
        </li>
        <li className="mb-6 ms-4 md:ms-8">
          <span className="absolute flex items-start justify-center w-6 h-6  md:w-8 md:h-8 rounded-full -start-3 ">
            <RiJavascriptFill className="text-3xl text-yellow-500" />
          </span>
          <h3 className="flex items-center justify-between text-left mb-1 text-lg md:text-xl font-semibold  text-yellow-500 w-full ml-2">
            Javascript Mastery
            <span className="bg-blue-100 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 ms-3 cursor-pointer">
              <a
                href="https://www.udemy.com/certificate/UC-ace70b7c-41ce-4b5b-8ba8-9617bb2716c8/"
                target="_blank"
                rel="noreferrer">
                {`  View `}
              </a>
            </span>
          </h3>
          {/* <div className="flex items-start mb-1 text font-semibold  text-white  ml-2">
            Source : <span className="italic text-blue-400"> Udemy</span>
          </div> */}

          <div className="mb-4  text-left  ml-2">
            <p className="list-disc">
              Modern JavaScript Mastery certification covering ES6+,
              asynchronous programming, DOM manipulation, closures, higher-order
              functions, and other advanced JavaScript concepts.
            </p>
          </div>
        </li>

        <li className="mb-6 ms-4 md:ms-8">
          <span className="absolute flex items-start justify-center w-6 h-6  md:w-8 md:h-8 rounded-full -start-3 ">
            <RiCss3Fill className="text-3xl text-blue-500" />
          </span>
          <h3 className="flex items-center justify-between text-left mb-1 text-lg md:text-xl font-semibold  text-blue-500 w-full ml-2">
            Advanced CSS and SASS
            {/* {isLatest && ( */}
            <span className="bg-blue-100 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 ms-3 cursor-pointer">
              <a
                href="https://www.udemy.com/certificate/UC-1e2dc70b-f2ef-4f9f-bb42-fd713dddb52a/"
                target="_blank"
                rel="noreferrer">
                View
              </a>
            </span>
          </h3>
          {/* <div className="flex items-start mb-1 text font-semibold  text-gray-900 dark:text-white ml-2">
            Source : <span className="italic text-blue-400"> Udemy</span>
          </div> */}

          <div className="mb-4 font-normal text-left ml-2">
            <p>
              Advanced CSS & SASS certification focused on responsive layouts,
              Flexbox, Grid, animations, transitions, and scalable,
              component-based styling using SASS features like variables,
              mixins, functions, nesting, and partials.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};
Certificates.propTypes = {
  role: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  isLatest: PropTypes.bool.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Certificates;
