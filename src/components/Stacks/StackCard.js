const StackCard = ({ logo, title, tags }) => {
  return (
    <div className="bg-primaryLight  p-8 md:p-16 rounded-lg md:rounded-xl border-2 flex flex-col gap-4 ">
      <img className="w-min" src={logo} alt="" />
      <h3 className="md:text-3xl text-lg">{title}</h3>
      <p className="text-xs md:text-lg text-dullText">{tags}</p>
    </div>
  );
};

export default StackCard;
