import Card from "./Card";
import Location from "./Location.svg";
import Mail from "./Mail.svg";
import Phone from "./Phone.svg";
import Passport from "./Passport.svg";

const Details = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:flex flex-col md:w-1/3">
      <Card icon={Location} description="Aberdeen, United Kingdom" />
      <Card icon={Mail} description="olaniyansamuel2015@gmail.com" />
      <Card icon={Phone} description="+44-7467-253-630" />
      <Card icon={Passport} description="Can Legally work in UK and Canada" />
    </div>
  );
};

export default Details;
