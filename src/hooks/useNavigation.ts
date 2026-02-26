import { useState, useEffect, useRef } from "react";

export const useNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleNav: () => void = () => {
    setIsNavOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    if (isNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen]);

  return { isNavOpen, navRef, buttonRef, toggleNav };
};
