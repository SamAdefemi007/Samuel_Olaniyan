const ResumeCard = ({ title, timeframe, description }) => {
  return (
    <div className="p-4 bg-primaryLight rounded-lg m-2">
      <h2 className="text-lg md:text-3xl md:mb-2">{title}</h2>
      <p className="text-dullText text-xs md:text-lg mb-2">{timeframe}</p>
      <p className="text-dullText text-sm md:text-lg">{description}</p>
    </div>
  );
};

export default ResumeCard;
