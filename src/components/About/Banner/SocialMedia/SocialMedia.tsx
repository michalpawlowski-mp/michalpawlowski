import { socialLinks } from "./socialLinks";

const SocialMedia: React.FC = () => {
  return (
    <ul className="w-full flex">
      {socialLinks.map(({ href, icon, alt }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-1 mx-1 rounded-full border border-white hover:bg-white/20"
          >
            <img
              className="invert rounded-full"
              src={icon}
              alt={alt}
              width={"24px"}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
