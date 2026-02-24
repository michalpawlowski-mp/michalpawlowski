import React, { useState } from "react";
import { copy, linkedin } from "../../assets/imports";

const Contact: React.FC = () => {
  const [notification, setNotification] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setNotification("Skopiowano do schowka!");
        setTimeout(() => setNotification(null), 3000);
      },
      (err) => {
        console.error("Błąd podczas kopiowania: ", err);
      },
    );
  };

  return (
    <section id="contact" className="w-full p-2 flex flex-col items-center">
      <h2 className="text-4xl flex font-bold mb-4 text-white">Opcje kontaktu</h2>
      <div className="w-full flex md:flex-row flex-col items-center justify-center m-2">
        <div className="bg-white/20 flex rounded-full overflow-hidden m-1">
          <a
            className="py-4 pl-4 pr-2 hover:bg-white/30 transition duration-300 ease-in-out"
            href="mailto:kontakt@michalpawlowski.pl"
          >
            kontakt@michalpawlowski.pl
          </a>
          <div onClick={() => copyToClipboard("kontakt@michalpawlowski.pl")}>
            <img
              src={copy}
              alt="skopiuj email"
              className="py-4 pr-4 pl-2 hover:bg-white/30 transition duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>
        <div className="bg-white/20 flex rounded-full overflow-hidden m-1">
          <a
            className="py-4 pl-4 pr-2 hover:bg-white/30 transition duration-300 ease-in-out"
            href="tel:+48728117024"
          >
            728 117 024
          </a>
          <div onClick={() => copyToClipboard("728 117 024")}>
            <img
              src={copy}
              alt="skopiuj numer telefonu"
              className="py-4 pr-4 pl-2 hover:bg-white/30 transition duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>
        <div className="bg-white/20 flex rounded-full justify-center items-center overflow-hidden m-1 hover:bg-white/30 transition duration-300 ease-in-out cursor-pointer">
          <img src={linkedin} alt="mój profil linkedin" className="py-3 pl-2 invert" />
          <a
            className="p-4"
            target="_blank"
            href={"https://www.linkedin.com/in/michalpawlowski-mp/"}
          >
            Michał Pawłowski
          </a>
        </div>
      </div>
      {notification && (
        <div className="fixed bottom-20 bg-white/30 text-white py-2 px-4 rounded">
          {notification}
        </div>
      )}
    </section>
  );
};

export default Contact;
