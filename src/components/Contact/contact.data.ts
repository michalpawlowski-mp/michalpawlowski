export interface ContactProps {
  id: string;
  text: string;
  href: string;
  alt: string;
}

export const contactData: ContactProps[] = [
  {
    id: "mail",
    text: "kontakt@michalpawlowski.pl",
    href: "mailto:kontakt@michalpawlowski.pl",
    alt: "skopiuj email",
  },
  {
    id: "phone",
    text: "728 117 024",
    href: "tel:+48728117024",
    alt: "skopiuj numer telefonu",
  },
];
