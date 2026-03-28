export default interface ProjectsProps {
  toggleVisibility: () => void;
}

export interface ProjectsDataProps {
  id: string;
  title: string;
  features: string[];
  description: string[];
  miniDescription?: string;
  images: string[];
  technologies: { name: string; src: string }[];
  devTools?: { name: string; src: string }[];
  links: {
    github: string;
    website: string;
  };
  example?: boolean;
}
