import menuIcon from "./menuIcon.svg";
import HeaderButton from "./HeaderButton";

const DropDownMenu = ({ handleToggle, showMenu }) => {
  return (
    <div className="md:hidden relative">
      <button onClick={handleToggle} className="md:hidden">
        <img src={menuIcon} alt="dropdown for menu" />
      </button>
      {showMenu && (
        <div className="animate-waving-hand w-50vw border-2 bg-primaryLight absolute top-0 right-0 rounded-lg">
          <button
            className=" ml-2 mt-2 text-textWhite pl-2 border-secondaryLight border-2 text-center p-2 rounded-3xl"
            onClick={handleToggle}
          >
            X
          </button>
          <ul className="flex flex-col items-center space-between gap-8 text-dullText  p-8">
            <a
              className="active:bg-background hover:bg-secondaryDark p-2 rounded"
              href="#Home"
            >
              Home
            </a>
            <a
              className="active:bg-background hover:bg-secondaryDark p-2 p-2 rounded"
              href="#About"
            >
              About
            </a>
            <a
              className="active:bg-background hover:bg-secondaryDark p-2 p-2 rounded"
              href="#Porfolio"
            >
              Portfolio
            </a>
            <a
              className="active:bg-background hover:bg-secondaryDark p-2 p-2 rounded"
              href="#Resume"
            >
              Resume
            </a>
            <a
              className="active:bg-background hover:bg-secondaryDark p-2 p-2 rounded"
              href="#Contact"
            >
              Contact
            </a>
            <HeaderButton />
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
