import { useState } from "react";

export function useToggle(initialValue: boolean = false) {
  const [isVisible, setIsVisible] = useState<boolean>(initialValue);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return { isVisible, toggleVisibility, setIsVisible };
}
