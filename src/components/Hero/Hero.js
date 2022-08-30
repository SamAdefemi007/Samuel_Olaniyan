import PersonalDetails from "./PersonalDetails";
import Photograph from "./Photograph";

const Hero = () => {
  return (
    <div
      id="About"
      className="mt-16 grid grid-cols-2 gap-4 font-headline items-center"
    >
      <PersonalDetails />
      {/* <Photograph /> */}
    </div>
  );
};

export default Hero;
