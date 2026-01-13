import { useState, useMemo } from "react";
import { userBankCompensation } from "../data";

export const useCompensationSimulator = () => {
  const [isCompensationMade, setIsCompensationMade] = useState(false);

  const doCompensation = () => setIsCompensationMade(true);
  const reset = () => setIsCompensationMade(false);

  const balanceSheet = useMemo(() => {
    return isCompensationMade ? userBankCompensation.after : userBankCompensation.before;
  }, [isCompensationMade]);

  return {
    isCompensationMade,
    doCompensation,
    reset,
    userBankCompensationData: balanceSheet.bank,
  };
};
