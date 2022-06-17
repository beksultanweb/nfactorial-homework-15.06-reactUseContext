import { ReactComponent as GitLogoSVG } from "../../assets/git.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as StarWarsLogoSVG } from "../../assets/star-wars.svg";

const swLinks = [
    {
      url: "https://github.com/beksultanweb",
      name: "git_logo",
      component: <GitLogoSVG />,
    },
    {
      url: "https://www.instagram.com/beksya/",
      name: "instagram_logo",
      component: <InstagramLogoSVG />,
    },
  ];

export const Footer = () => {
    return (
        <footer>
        <div className="links-layout">
          {swLinks.map((link)=>
          (
            <a key={link.name}
            className="link"
            href={link.url}
            target="_blank"
            alt={link.name}
            rel="noreferrer"
          >
            {link.component}
          </a>
          ))}
        </div>
        <StarWarsLogoSVG />
        <div className="author">
          Author: Sagnaev Beksultan
        </div>
      </footer>
    );
}