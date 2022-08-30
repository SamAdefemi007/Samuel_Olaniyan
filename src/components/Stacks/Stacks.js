import StackCard from "./StackCard";
import UXresearch from "./UXresearch.svg";
import UIdesign from "./UIdesign.svg";
import FrontEnd from "./FrontEnd.svg";
import BackEnd from "./BackEnd.svg";
import Database from "./Database.svg";

const Stacks = () => {
  return (
    <div>
      <div className="w-40 border-2 border-secondary bg-primaryLight text-center py-2 mb-8">
        <p className="text-xs mb-2 font-light text-dullText">
          Technology Stacks
        </p>
        <h3 className="text-lg md:text-2xl">What I can do</h3>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-y-8 gap-x-4">
        <StackCard
          logo={UXresearch}
          title="UX Research"
          tags="Figjam,Google Forms,SurveyMonkey, Miro"
        />
        <StackCard logo={UIdesign} title="UI Design" tags="Figma, Adobe XD" />
        <StackCard
          logo={Database}
          title="Database Design"
          tags="MySQL, Postgreql, MongoDB"
        />
        <StackCard
          logo={FrontEnd}
          title="Front End Development"
          tags="ReactJS, Tailwind CSS, BootStrap, NextJS"
        />
        <StackCard
          logo={BackEnd}
          title="Back End Development"
          tags="ExpressJS, NodeJS, Django, Python, JavaScript"
        />
      </div>
      <hr className="border-2 border-surface my-16"></hr>
    </div>
  );
};

export default Stacks;
