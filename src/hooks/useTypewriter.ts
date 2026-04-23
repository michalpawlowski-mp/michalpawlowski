import { useState, useEffect, useRef } from "react";

const TYPING_SPEED = 90;
const DELETING_SPEED = 60;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

export function useTypewriter(phrases: string[]) {
  const [displayed, setDisplayed] = useState("");
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const current = phrases[phraseIndex.current];

      if (!isDeleting.current) {
        charIndex.current++;
        setDisplayed(current.slice(0, charIndex.current));

        if (charIndex.current === current.length) {
          isDeleting.current = true;
          timeout = setTimeout(tick, PAUSE_AFTER_TYPE);
          return;
        }
      } else {
        charIndex.current--;
        setDisplayed(current.slice(0, charIndex.current));

        if (charIndex.current === 0) {
          isDeleting.current = false;
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
          timeout = setTimeout(tick, PAUSE_AFTER_DELETE);
          return;
        }
      }

      timeout = setTimeout(tick, isDeleting.current ? DELETING_SPEED : TYPING_SPEED);
    }

    timeout = setTimeout(tick, PAUSE_AFTER_DELETE);
    return () => clearTimeout(timeout);
  }, [phrases]);

  return displayed;
}
