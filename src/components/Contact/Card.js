const Card = ({ icon, description }) => {
  return (
    <div className=" p-4 bg-textWhite text-black flex flex-col items-center gap-4 rounded-lg">
      <img src={icon} alt="" />
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

export default Card;
