import HeaderButton from "./HeaderButton";
import HeaderNavLink from "./HeaderNavLink";

const HeaderNav = () => {
  return (
    <div className="hidden md:flex text-dullText font-headline text-xl gap-x-8 items-center">
      <HeaderNavLink />
      <HeaderButton />
    </div>
  );
};

export default HeaderNav;
