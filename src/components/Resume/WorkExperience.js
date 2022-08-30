import line from "./line.svg";
import ResumeCard from "./ResumeCard";

const WorkExperience = () => {
  return (
    <div className="md:w-1/2">
      <div>
        <h2 className="md:text-2xl">Work Experience</h2>
        <p className="text-secondaryLight">2017-2022</p>
      </div>
      <div className="flex">
        <img src={line} alt="" />
        <div className="flex flex-col gap-8 ">
          <ResumeCard
            title="Enterprise Architect"
            timeframe="ScottishWater (Jun 2022 - Aug 2022)- Internship"
            description="Worked on different projects which ranges across strategy development, business & process modelling, Customer sentiment analysis, Lifecycle gap management amongst others."
          />
          <ResumeCard
            title="Software Developer"
            timeframe="Tycom Limited (May 2022 - Jun 2022)- Freelance"
            description="Built an application for monitoring and analyzing deleted jobs that were due to be moved to immutable storage to prevent permanent data loss. I also maintained legacy software and continuously refactored some of the code base to reflect the current software development best practices.
"
          />
          <ResumeCard
            title="Senior Treasury Analyst"
            timeframe="Access Bank PLC (Sep 2017 - Nov 2021)- Fulltime"
            description="Led a team that contributed more than 30% to the organization’s revenue in 2021 (the highest single contribution by a team). I was also responsible for implementing over 200m USD in Forward contract agreements with importers in Nigeria to ease FX pressures in 2021 (Awarded by EMEA as the best FX trading team in Africa, 2021).

"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
