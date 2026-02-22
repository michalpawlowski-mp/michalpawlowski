import { useEffect, useState } from "react";

export const useTypewriter = (texts: string[]) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));

          if (displayedText === currentText) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));

          if (displayedText === "") {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, texts]);

  return displayedText;
};
