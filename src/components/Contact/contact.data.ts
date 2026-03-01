export interface ContactProps {
  id: number;
  text: string;
  href: string;
  alt: string;
}

export const contactData: ContactProps[] = [
  {
    id: 1,
    text: "kontakt@michalpawlowski.pl",
    href: "mailto:kontakt@michalpawlowski.pl",
    alt: "skopiuj email",
  },
  {
    id: 2,
    text: "728 117 024",
    href: "mailto:kontakt@michalpawlowski.pl",
    alt: "skopiuj numer telefonu",
  },
];
