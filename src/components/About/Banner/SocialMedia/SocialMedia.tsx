import { socialLinks } from "./socialLinks";

const SocialMedia: React.FC = () => {
  return (
    <ul className="flex gap-1 flex-wrap mt-1">
      {socialLinks.map(({ id, href, icon }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-1.5 rounded-lg border border-white/10 hover:bg-[#252836] hover:border-white/20 transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <img className="rounded-full w-5 h-5" src={icon} alt="" loading="lazy" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
