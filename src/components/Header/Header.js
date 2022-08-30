import HeaderLogo from "./HeaderLogo";
import HeaderNavLink from "./HeaderNav";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setShowMenu((prev) => !prev);
  };
  return (
    <div
      id="Home"
      className=" flex items-start md:items-center justify-between relative"
    >
      <HeaderLogo />
      <HeaderNavLink showMenu={showMenu} />
      <DropDownMenu showMenu={showMenu} handleToggle={handleToggle} />
    </div>
  );
};

export default Header;
