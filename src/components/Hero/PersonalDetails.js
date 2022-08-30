import SocialMedia from "./SocialMedia";

const PersonalDetails = () => {
  return (
    <div className=" flex flex-col gap-y-16 text-textWhite">
      <div className="flex flex-col gap-2">
        <p className="text-xl md:text-3xl text-secondaryLight">Hello, I'm</p>
        <h1 className="text-3xl md:text-6xl font-bold">Samuel Olaniyan</h1>
        <p className="text-dullText text-sm md:text-lg">
          Software Developer & Designer
        </p>
      </div>

      <div>
        <p className="text-dullText mb-2">FIND ME ON</p>
        <SocialMedia />
      </div>
    </div>
  );
};

export default PersonalDetails;
