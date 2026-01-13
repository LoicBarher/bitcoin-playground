import { useState } from "react";

export const useIdentityCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return { isHovered, setIsHovered };
};
