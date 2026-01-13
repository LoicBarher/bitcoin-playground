import { useState, useMemo } from "react";
import { usersDebtsDefault } from "../data";

export const useDefaultSimulator = () => {
  const [isDefaulted, setIsDefaulted] = useState(false);

  const triggerDefault = () => setIsDefaulted(true);
  const reset = () => setIsDefaulted(false);

  const balanceSheet = useMemo(() => {
    return isDefaulted ? usersDebtsDefault.after : usersDebtsDefault.before;
  }, [isDefaulted]);

  return {
    isDefaulted,
    triggerDefault,
    reset,
    bankData: balanceSheet.bank,
  };
};
