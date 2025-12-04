import { useEffect, useState } from "react";

const getNewPercent = () => {
  const scrollTop = window.scrollY;
  const fullHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (fullHeight <= 0) {
    return "0%";
  }

  return Math.floor((scrollTop / fullHeight) * 100) + "%";
};

export const useProgress = () => {
  const [progress, setProgress] = useState("0%");

  useEffect(() => {
    const handleScroll = () => {
      setProgress(getNewPercent());
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return progress;
};
