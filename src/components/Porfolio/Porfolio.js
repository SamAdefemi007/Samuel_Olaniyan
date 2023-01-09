import PorfolioCard from "./PorfolioCard";
import Shopverse from "./project_images/Shopverse.svg";
import Statstack from "./project_images/Statstack.svg";
import Rateflix from "./project_images/Rateflix.svg";
import Quiz from "./project_images/Quiz.svg";
import Html5 from "./icons/Html5.svg";
import Css from "./icons/Css.svg";
import javascript from "./icons/javascript.svg";
import iconscout from "./icons/iconscout.svg";
import figma from "./icons/Figma.svg";
import python from "./icons/python.svg";
import Mysql from "./icons/Mysql.svg";
import Postgresql from "./icons/Postgresql.svg";
import ReactLogo from "./icons/React.svg";
import Django from "./icons/Django.svg";
import BootStrap from "./icons/Bootstrap.svg";
import Porfolio_image from "./project_images/Porfolio.svg";
import Invoice from "./project_images/Invoice.svg";
import Expense from "./project_images/Expense.svg";
import { useState } from "react";

const Porfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShowAll((prev) => !prev);
  };
  return (
    <div id="Porfolio" className="flex flex-col items-center gap-4 md:gap-8">
      <h3 className="text-lg md:text-3xl text-center mb-4 md:mb-16">
        My Porfolio
      </h3>
      <div className="bg-primaryLight rounded-xl pb-16 mx-auto md:w-5/6">
        <div className="grid grid-cols-2 gap-x-4 md:gap-y-8   p-2  ">
          <PorfolioCard
            image={Shopverse}
            technologies={[
              Html5,
              Css,
              javascript,
              BootStrap,
              Django,
              python,
              Postgresql,
            ]}
            demoLink="https://shopverse-production.up.railway.app/"
            sourceCode="https://github.com/SamAdefemi007/ShopVerse"
          />
          <PorfolioCard
            image={Statstack}
            technologies={[
              Html5,
              Css,
              javascript,
              BootStrap,
              Django,
              python,
              Mysql,
            ]}
            demoLink="https://stat-stack-final-production.up.railway.app/"
            sourceCode="https://github.com/SamAdefemi007/Stat-Stack-final"
          />
          <PorfolioCard
            image={Rateflix}
            technologies={[Html5, Css, BootStrap, Django, python, Mysql]}
            demoLink="https://web-production-ba1c.up.railway.app/"
            sourceCode="https://github.com/SamAdefemi007/RateFlix"
          />
          <PorfolioCard
            image={Quiz}
            technologies={[Html5, Css, ReactLogo, javascript]}
            demoLink="https://react-quiz-kohl.vercel.app/"
            sourceCode="https://github.com/SamAdefemi007/ReactQuiz"
          />
        </div>
        {showAll && (
          <div className="grid grid-cols-2 gap-x-4 md:gap-y-8   p-2 ">
            <PorfolioCard
              image={Expense}
              technologies={[iconscout, figma]}
              demoLink="https://www.figma.com/proto/aTdAqFbjZTBcxO0Z1w5buM/ExpenseTracker?node-id=62%3A152&scaling=scale-down&page-id=0%3A1&starting-point-node-id=62%3A152&show-proto-sidebar=1"
              isDesign={true}
            />
            <PorfolioCard
              image={Invoice}
              technologies={[iconscout, figma]}
              demoLink="https://www.figma.com/proto/odlqVnN7DxJwnyAJnOsl2P/Wireframe?node-id=29%3A1460&scaling=scale-down&page-id=27%3A1332&starting-point-node-id=29%3A1460&show-proto-sidebar=1"
              isDesign={true}
            />
            <PorfolioCard
              image={Porfolio_image}
              technologies={[iconscout, figma]}
              demoLink="https://www.figma.com/proto/nOoWCQ29B1qMNjBS4Xopsw/Personal-Portfolio?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1"
              isDesign={true}
            />
          </div>
        )}
      </div>
      <div>
        {!showAll && (
          <button
            onClick={handleShow}
            className="px-4 py-2 md:px-8 md:py-4 bg-secondaryLight text-center rounded-lg"
          >
            View All Projects
          </button>
        )}
      </div>
      <hr className="w-full border-2 border-surface my-16"></hr>
    </div>
  );
};

export default Porfolio;
