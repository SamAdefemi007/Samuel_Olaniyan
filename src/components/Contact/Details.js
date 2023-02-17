import Card from "./Card";
import Location from "./Location.svg";
import Mail from "./Mail.svg";
import Phone from "./Phone.svg";

const Details = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:flex flex-col md:w-1/3">
      <Card icon={Location} description="Calgary, Alberta" />
      <Card icon={Mail} description="olaniyansamuel2015@gmail.com" />
      <Card icon={Phone} description="+1-403-888-1568" />
    </div>
  );
};

export default Details;
