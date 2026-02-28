import {
  linkedin,
  github,
  ig,
  x,
  yt,
  tiktok,
  threads,
  fb,
} from "../../../../assets/imports/index";

export type SocialLink = {
  id: string;
  href: string;
  icon: string;
  alt: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/michalpawlowski-mp/",
    icon: linkedin,
    alt: "Profil LinkedIn",
  },
  {
    id: "github",
    href: "https://github.com/michalpawlowski-mp",
    icon: github,
    alt: "Profil GitHub",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/mp.dev_/",
    icon: ig,
    alt: "Profil Instagram",
  },
  {
    id: "x",
    href: "https://x.com/mp_dev_?s=21",
    icon: x,
    alt: "Profil X",
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/@MP-devJS",
    icon: yt,
    alt: "Kanał YouTube",
  },
  {
    id: "tiktok",
    href: "https://www.tiktok.com/@mp.dev_",
    icon: tiktok,
    alt: "Profil TikTok",
  },
  {
    id: "threads",
    href: "https://www.threads.net/@mp.dev_",
    icon: threads,
    alt: "Profil Threads",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/profile.php?id=61572716596188",
    icon: fb,
    alt: "Profil Facebook",
  },
];
