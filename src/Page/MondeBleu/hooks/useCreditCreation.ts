import { useState, useMemo } from "react";
import { userBankCredit } from "../data";

export const useCreditCreation = () => {
  const [isLoanGranted, setIsLoanGranted] = useState(false);
  const grantLoan = () => setIsLoanGranted(true);
  const reset = () => setIsLoanGranted(false);

  const balanceSheets = useMemo(() => {
    return isLoanGranted ? userBankCredit.after : userBankCredit.before;
  }, [isLoanGranted]);

  return {
    isLoanGranted,
    grantLoan,
    reset,
    userBankData: balanceSheets.bank,
  };
};
