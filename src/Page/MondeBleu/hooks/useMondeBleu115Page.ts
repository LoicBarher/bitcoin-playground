import { useState } from "react";

export const useMondeBleu115Page = () => {
  const [isQuizSolved, setIsQuizSolved] = useState(false);

  return { isQuizSolved, setIsQuizSolved };
};
