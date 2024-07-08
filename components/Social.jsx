import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialsLink = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/brajinhanna/",
  },
  { icon: <FaGithub />, link: "https://github.com/BMHA1" },
  { icon: <FaLinkedin />, link: "linkedin.com/in/brajinhanna" },
];

const Social = ({ containerStyle, iconStyles }) => {
  return (
    <div className={containerStyle}>
      {SocialsLink.map((item, index) => {
        return (
          <Link className={iconStyles} key={index} href={item.link}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
