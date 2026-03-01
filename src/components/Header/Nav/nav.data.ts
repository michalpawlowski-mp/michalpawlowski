interface navLinksProps {
  id: number;
  title: string;
  path: string;
}

export const navLinks: navLinksProps[] = [
  { id: 1, title: "Strona Główna", path: "/" },
  { id: 2, title: "O mnie", path: "/about" },
  { id: 3, title: "Portfolio", path: "/portfolio" },
  { id: 4, title: "Kontakt", path: "/contact" },
];
