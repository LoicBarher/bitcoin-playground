import { useState } from "react";

export const useQESimulator = () => {
  const [isQEDone, setIsQEDone] = useState(false);

  const startQE = () => setIsQEDone(true);
  const reset = () => setIsQEDone(false);

  return {
    isQEDone,
    startQE,
    reset,
  };
};
