import ResumeCard from "./ResumeCard";
import line from "./line.svg";

const Education = () => {
  return (
    <div className="md:w-1/2">
      <div>
        <h2 className="md:text-2xl">Education</h2>
        <p className="text-secondaryLight">2010-2022</p>
      </div>
      <div className="flex">
        <img src={line} alt="" />
        <div className="flex flex-col gap-8 ">
          <ResumeCard
            title="Msc Information Technology"
            timeframe="University of Aberdeen (Jan 2022 - Mar-2023)"
            description="Relevant Modules: Python Programming, , Web Development and Algorithmic problem solving, Software project management, Enterprise software development, Information Security, Database systems and Big Data, and Human computer interaction."
          />
          <ResumeCard
            title="Banking Excellence Training"
            timeframe="Access Bank PLC (Apr 2017 - Aug 2017)"
            description="Learnt the rudiments of accounting, finance, treasury management and banking practices. I got my chartership in 2017 as an ACIB member."
          />
          <ResumeCard
            title="B.Eng Chemical Engineering"
            timeframe="University of Ilorin, Nigeria (Nov 2010 - Aug 2015)"
            description="Grade:First Class - A recipient of the MTNF scholarship award and the University of Ilorin's Scholarship award during my time in the University. I also led the National Student body of the NSCHE and organized various events to improve the quality of Chemical Engineering graduates in Nigeria."
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
