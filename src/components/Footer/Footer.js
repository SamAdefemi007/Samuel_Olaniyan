import HeaderLogo from "../Header/HeaderLogo";
import SocialMedia from "../Hero/SocialMedia";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-2 mb-16">
      <div className="w-24">
        <HeaderLogo />
      </div>
      <div className="w-4 mr-12">
        <SocialMedia />
      </div>

      <p className="text-xs md:text-sm"> Sam@2022. All rights reserved</p>
    </div>
  );
};

export default Footer;
