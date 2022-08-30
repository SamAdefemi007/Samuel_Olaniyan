import Linkedin from "./Linkedin.svg";
import Twitter from "./Twitter.svg";
import Facebook from "./Facebook.svg";
const SocialMedia = () => {
  return (
    <div className="flex gap-x-2">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/samuel-olaniyan"
      >
        <img src={Linkedin} alt="linkedin details" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/sam_ade_femi"
      >
        <img src={Twitter} alt="twitter details" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/hollaniyan.psalmz"
      >
        <img src={Facebook} alt="facebook details" />
      </a>
    </div>
  );
};

export default SocialMedia;
