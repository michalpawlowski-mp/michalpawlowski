import { Link } from "react-router-dom";
import icon from "../../assets/icons/ui/arrow.svg";

type ButtonLinkProps = {
  content: string;
  link: string;
  external?: boolean;
};

const ButtonLink = ({ content, link, external = false }: ButtonLinkProps) => {
  const classes =
    "flex rounded-2xl bg-slate-700 p-3 font-medium shadow-lg transition-all duration-300 hover:bg-gray-800 hover:translate-x-1";

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
