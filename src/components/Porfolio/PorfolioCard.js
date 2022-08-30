const PorfolioCard = ({
  image,
  technologies,
  demoLink,
  sourceCode,
  isDesign,
}) => {
  return (
    <div className="flex flex-col gap-3 items-center pt-8 md:pt-16 px-4 rounded-lg">
      <img className="md:w-96" src={image} alt="web app built" />
      <div className="flex gap-2 ">
        {technologies.map((item, value) => {
          return (
            <img
              key={value}
              className="md:w-8"
              src={item}
              alt="tools used for building"
            />
          );
        })}
      </div>
      {!isDesign ? (
        <div className="flex gap-4 md:gap-4 justify-center mt-4">
          <a
            target="_blank"
            rel="noreferrer"
            className="rounded-lg text-center md:text-xl md:p-4  text-xs p-2 bg-primaryDark"
            href={demoLink}
          >
            Live Demo
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="rounded-lg text-center md:text-xl md:p-4 text-xs p-2 bg-primaryDark"
            href={sourceCode}
          >
            Source Code
          </a>
        </div>
      ) : (
        <div className="md:mt-4 mt-2">
          <a
            target="_blank"
            rel="noreferrer"
            className="rounded-lg text-center md:text-xl md:p-4  text-xs p-4 bg-primaryDark"
            href={demoLink}
          >
            Show Prototype
          </a>
        </div>
      )}
    </div>
  );
};

export default PorfolioCard;
