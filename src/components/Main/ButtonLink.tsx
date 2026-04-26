import { Link } from "react-router-dom";
import icon from "../../assets/icons/ui/arrow.svg";

type ButtonLinkProps = {
  content: string;
  link: string;
  external?: boolean;
};

const ButtonLink = ({ content, link, external = false }: ButtonLinkProps) => {
  const classes =
    "flex items-center rounded-lg bg-indigo-900 hover:bg-indigo-800 p-3 px-5 font-medium shadow-lg transition-all duration-200 hover:translate-x-0.5 text-white";

  const ButtonContent = (
    <>
      <span>{content}</span>
      <img src={icon} alt="" aria-hidden="true" className="ml-2" />
    </>
  );

  return external ? (
    <a href={link} className={classes} target="_blank" rel="noreferrer">
      {ButtonContent}
    </a>
  ) : (
    <Link to={link} className={classes}>
      {ButtonContent}
    </Link>
  );
};

export default ButtonLink;
