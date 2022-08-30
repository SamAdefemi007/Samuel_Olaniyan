const HeaderNavLink = ({ showMenu }) => {
  return (
    <ul className="flex gap-x-8">
      <a href="#Home">
        <li>Home</li>
      </a>
      <a href="#About">
        <li>About</li>
      </a>
      <a href="#Porfolio">
        <li>Portfolio</li>
      </a>
      <a href="#Contact">
        <li>Contact</li>
      </a>
    </ul>
  );
};

export default HeaderNavLink;
