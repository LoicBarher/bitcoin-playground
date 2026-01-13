import { useState } from "react";

export const useMondeBleu113Page = () => {
  const [isQuizSolved, setIsQuizSolved] = useState(false);

  return { isQuizSolved, setIsQuizSolved };
};
