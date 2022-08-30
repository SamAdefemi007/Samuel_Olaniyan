import cv from "./cv.pdf";

const HeaderButton = () => {
  return (
    <a
      href={cv}
      download
      className="text-dullText bg-secondary p-2 rounded-md text-textBlack"
    >
      Download CV
    </a>
  );
};

export default HeaderButton;
