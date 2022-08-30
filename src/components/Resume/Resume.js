import Education from "./Education";
import WorkExperience from "./WorkExperience";

const Resume = () => {
  return (
    <div id="Resume" className="p-8 flex flex-col items-center gap-8 ">
      <div className="text-center">
        <p className="text-xs md:text-md text-secondaryDark mb-2">
          YEARS OF EXPERIENCE
        </p>
        <h2 className="md:text-3xl text-xl">My Resume</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-16">
        <WorkExperience />
        <Education />
      </div>
      <hr className="w-full border-2 border-surface my-8"></hr>
    </div>
  );
};

export default Resume;
