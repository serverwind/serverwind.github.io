import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

const SocialIcons = ({ img, url, alt }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img className="w-8 hover:animate-bounce" src={img} alt={alt} />
    </a>
  );
};

const Social = () => {
  return (
    <div className="flex items-center gap-2 mr-8">
      <span className="text-lg">Social</span>
      <SocialIcons img={linkedin} url="https://www.linkedin.com/in/lestrangeqq/" alt="Linkedin Profile" />
      <SocialIcons img={github} url="https://github.com/serverwind" alt="Github Profile" />
    </div>
  );
};

export default Social;
