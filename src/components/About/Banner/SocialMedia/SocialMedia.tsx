import { socialLinks } from "./socialLinks";

const SocialMedia: React.FC = () => {
  return (
    <ul className="w-full flex">
      {socialLinks.map(({ id, href, icon, alt }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            aria-label={alt}
            rel="noopener noreferrer"
            className="flex items-center p-1 mx-1 rounded-full border border-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <img
              className="rounded-full"
              src={icon}
              alt=""
              width={24}
              loading="lazy"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
