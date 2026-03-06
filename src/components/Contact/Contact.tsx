import React, { useState } from "react";
import { copy } from "../../assets/imports";
import { contactData } from "./contact.data";

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
    <section className="w-full p-2 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4 text-white">Opcje kontaktu</h2>
      <div className="w-full flex md:flex-row flex-col items-center justify-center m-2">
        {contactData.map((item) => (
          <div
            key={item.id}
            className="bg-white/20 flex rounded-full overflow-hidden m-1"
          >
            <a
              className="py-4 pl-4 pr-2 hover:bg-white/30 transition duration-300 ease-in-out cursor-pointer"
              href={item.href}
            >
              {item.text}
            </a>
            <img
              onClick={() => copyToClipboard(item.text)}
              src={copy}
              alt={item.alt}
              loading="lazy"
              className="py-4 pr-4 pl-2 hover:bg-white/30 transition duration-300 ease-in-out cursor-pointer"
            />
          </div>
        ))}
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
