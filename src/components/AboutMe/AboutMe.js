import hireme from "./hireme.svg";

const AboutMe = () => {
  return (
    <div className="mt-8 pb-4 mb-20">
      <div className="bg-primaryDark ">
        <div className="bg-primaryLight w-32 md:w-40 text-lg md:text-2xl text-center p-2 md:p-4 border-2 border-secondaryDark">
          About Me
        </div>
      </div>
      <div className="bg-primaryLight py-8 px-4 items-center grid md:grid-cols-2 gap-x-4">
        <div>
          <img
            className="mx-auto w-1/2 md:w-full "
            src={hireme}
            alt="hire me"
          />
        </div>
        <div>
          <p className="text-dullText text-lg md:text-2xl mb-2 md:mb-8">
            ABOUT ME
          </p>
          <h1 className="font-normal text-xl md:text-3xl mb-4">
            Why hire me for your fullstack software development position?
          </h1>
          <p className="text-dullText text-xs md:text-lg">
            I am a skilled problem solver who uses tech as a tool to provide
            efficient solutions. I have a background in Chemical Engineering, 5
            years experience in Finance and good knowledge of both FrontEnd and
            BackEnd development tools. Hiring me means you would not be getting
            just a software developer, but a self starter who has experience
            managing customers, leading a team and someone who can think beyond
            the development process. I have experience conducting user research,
            producing adaptive UI designs, and working on both Frontend and
            BackEnd development. I am pretty flexible when it comes to tools and
            I could easily learn a new language to solve a problem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
