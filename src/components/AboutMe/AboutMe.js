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
          <div className="text-dullText text-xs md:text-lg flex flex-col gap-2">
            <p>
              I hold a Masters degree in Information Technology and have been
              working in the software development industry for around 3 years.
              My experience covers both FrontEnd and BackEnd development tools,
              which has given me an in-depth understanding of the entire
              development process.
            </p>
            <p>
              In addition to my technical expertise, I am a natural problem
              solver who approaches challenges with a creative and analytical
              mindset. I view technology as a tool to provide effective
              solutions and strive to produce adaptive UI designs that can be
              tailored to the needs of individual users.
            </p>
            <p>
              What sets me apart from other candidates is my ability to think
              beyond the development process. As someone who has managed
              customers and led teams, I have a deep understanding of the
              importance of communication and collaboration. I have experience
              conducting user research, which allows me to see problems from the
              user's perspective and create solutions that are tailored to their
              needs.
            </p>
            <p>
              Lastly, I am a quick learner who is open to using new tools and
              languages. I believe that having a broad skill set is key to
              staying ahead in an ever-changing industry, and I am always eager
              to learn and develop new skills to solve problems efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
