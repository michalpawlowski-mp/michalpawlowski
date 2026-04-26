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
      (err) => console.error("Błąd podczas kopiowania: ", err),
    );
  };

  return (
    <section className="w-full flex flex-col items-center justify-center flex-1 gap-5 px-4">
      <h2 className="text-3xl font-bold text-white">Opcje kontaktu</h2>
      <div className="flex md:flex-row flex-col items-center gap-3">
        {contactData.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-[#1a1d27] border border-white/10 rounded-lg overflow-hidden"
          >
            <a
              className="py-3 px-4 text-slate-300 hover:text-white hover:bg-[#252836] transition-colors text-sm"
              href={item.href}
            >
              {item.text}
            </a>
            <img
              onClick={() => copyToClipboard(item.text)}
              src={copy}
              alt={item.alt}
              loading="lazy"
              className="py-3 px-3 border-l border-white/10 cursor-pointer hover:bg-[#252836] transition-colors"
            />
          </div>
        ))}
      </div>
      {notification && (
        <div className="fixed bottom-8 bg-[#1a1d27] border border-white/10 text-slate-300 text-sm py-2 px-5 rounded-lg shadow-lg">
          {notification}
        </div>
      )}
    </section>
  );
};

export default Contact;
