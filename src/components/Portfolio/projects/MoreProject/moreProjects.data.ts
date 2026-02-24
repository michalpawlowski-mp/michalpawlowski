import { codepen, uiverse, github } from "../../../../assets/imports";

export interface LinkItem {
  href: string;
  icon: string;
  label: string;
  imgClass?: string;
}

export interface moreProjectsProps {
  title: string;
  links: LinkItem[];
}

export const moreProjects: moreProjectsProps[] = [
  {
    title: "Więcej projektów",
    links: [
      {
        href: "https://github.com/michalpawlowski-mp?tab=repositories",
        icon: github,
        label: "michalpawlowski-mp",
        imgClass: "w-7 h-7",
      },
    ],
  },
  {
    title: "Tworzę i eksperymentuję",
    links: [
      {
        href: "https://codepen.io/mpdev_",
        icon: codepen,
        label: "MP.Dev",
      },
      {
        href: "https://uiverse.io/profile/aJpaRmp",
        icon: uiverse,
        label: "MP.Dev",
        imgClass: "rounded-full",
      },
    ],
  },
];
