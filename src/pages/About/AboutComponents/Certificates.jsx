import PropTypes from "prop-types";
import { RiCss3Fill, RiJavascriptFill } from "react-icons/ri";

const Certificates = () => {
  return (
    <div className="py-2 px-3 xl:px-0 flex flex-col gap-y-2 xl:gap-y-4 items-start xl:items-start transition-all delay-150">
      <ol className="relative">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-start justify-center w-8 h-8  rounded-full -start-3 ">
            <RiJavascriptFill className="text-3xl text-yellow-500" />
          </span>
          <h3 className="flex items-center justify-between mb-1 text-lg font-semibold text-gray-900 dark:text-white w-full ml-2">
            Javascript Mastery
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3 cursor-pointer">
              <a
                href="https://www.udemy.com/certificate/UC-ace70b7c-41ce-4b5b-8ba8-9617bb2716c8/"
                target="_blank"
                rel="noreferrer">
                View Certificate
              </a>
            </span>
          </h3>
          <div className="flex items-start mb-1 text font-semibold  text-white  ml-2">
            Source : <span className="italic text-blue-400"> Udemy</span>
          </div>

          <div className="mb-4 text-sm font-normal text-left text-gray-500 dark:text-gray-400 ml-2">
            <ul className="list-disc">
              <li>
                Master the JavaScript fundamentals: variables, if/else,
                operators, boolean logic, functions, arrays, objects, loops,
                strings, and more
              </li>
              <li>
                Deep dive into functions: arrow functions, first-class and
                higher-order functions, bind, closures destructuring, spread
                operator, default arguments, optional chaining.
              </li>
              <li>
                Deep dive into object-oriented programming: prototypal
                inheritance, constructor functions (ES5), classes (ES6),
                encapsulation, abstraction, inheritance, and polymorphism.
              </li>
            </ul>
          </div>
        </li>

        <li className="mb-10 ms-6">
          <span className="absolute flex items-start justify-center w-8 h-8  rounded-full -start-3 ">
            <RiCss3Fill className="text-3xl text-blue-500" />
          </span>
          <h3 className="flex items-center justify-between mb-1 text-lg font-semibold text-gray-900 dark:text-white w-full ml-2">
            Advanced CSS and SASS
            {/* {isLatest && ( */}
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3 cursor-pointer">
              <a
                href="https://www.udemy.com/certificate/UC-1e2dc70b-f2ef-4f9f-bb42-fd713dddb52a/"
                target="_blank"
                rel="noreferrer">
                View Certificate
              </a>
            </span>
          </h3>
          <div className="flex items-start mb-1 text font-semibold  text-gray-900 dark:text-white ml-2">
            Source : <span className="italic text-blue-400"> Udemy</span>
          </div>

          <div className="mb-4 text-sm font-normal text-left text-gray-500 dark:text-gray-400 ml-2">
            <ul className="list-disc">
              <li>
                Learned CSS techniques to create stunning designs and effects:
                clip-path, background-clip, mask-image, background-blend-mode,
                shape-outside, filter, backdrop-filter, object-fit, transform,
                column-count, hyphens, perspective, calc() and custom CSS
                properties.
              </li>
              <li>
                Advanced CSS animations with @keyframes, animation, and
                transition.
              </li>
              <li>
                Advanced CSS selectors, pseudo-classes, and pseudo-elements
                required for modern CSS development.
              </li>
              <li>
                Modern responsive design: fluid grids, layout types, flexible
                images, using media queries to test for different screen widths,
                pixel densities, and touch capabilities.
              </li>
            </ul>
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
