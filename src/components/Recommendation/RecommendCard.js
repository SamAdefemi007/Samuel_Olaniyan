import comments from "./Comments.svg";
import like from "./like.svg";

const RecommendCard = ({ image, description, jobTitle, name }) => {
  return (
    <div className=" bg-primaryLight p-8 rounded-lg flex flex-col gap-8">
      <div className="flex justify-between">
        <img src={comments} alt="" />
        <img src={like} alt="" />
      </div>
      <p className="text-xs md:text-lg italic">{description}</p>
      <div className="flex gap-8 items-center">
        <div>
          <h4 className="text-sm md:text-lg">{name}</h4>
          <p className="text-xs md:text-sm">{jobTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
