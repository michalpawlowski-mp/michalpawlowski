export interface SkillCategory {
  title: string;
  items: string[];
  info?: string;
}

export const skills: SkillCategory[] = [
  {
    title: "Technologie frontendowe",
    items: ["HTML5", "CSS3", "Responsive Web Design (RWD)", "JavaScript ", "TypeScript"],
  },
  {
    title: "Frameworki i biblioteki",
    items: [
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "SASS / SCSS",
      "Less",
      "Styled Components",
      "Next.js",
      "jQuery",
    ],
  },
  {
    title: "Narzędzia i środowiska",
    items: ["Git", "GitHub", "npm", "Vite", "Vercel", "VS Code", "DevTools"],
  },
  {
    title: "Wsparcie AI w programowaniu",
    items: ["Cloude", "GitHub Copilot", "ChatGPT", "Gemini"],
    info: "debugowanie, refaktoryzacja, nauka",
  },
  {
    title: "Grafika i UI",
    items: ["Photoshop", "Photopea", "GIMP", "Canva"],
  },
  {
    title: "Umiejętności miękkie",
    items: [
      "Komunikatywność",
      "Praca zespołowa",
      "Kreatywność",
      "Rozwiązywanie problemów",
      "Organizacja czasu",
    ],
  },
];
