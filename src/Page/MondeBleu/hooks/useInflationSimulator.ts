import { useState, useMemo } from "react";
import { type SimulatorState } from "../types";

/**
 * Custom hook to manage the state and logic of the inflation simulator.
 * It calculates the final capital and purchasing power loss based on user inputs.
 */
export const useInflationSimulator = () => {
  const [simulatorState, setSimulatorState] = useState<SimulatorState>({
    initialCapital: 10000,
    durationInYears: 10,
    annualInflationRate: 5,
  });

  const { initialCapital, durationInYears, annualInflationRate } =
    simulatorState;

  const finalCapital = useMemo(() => {
    const inflationDecimal = annualInflationRate / 100;
    return initialCapital * Math.pow(1 - inflationDecimal, durationInYears);
  }, [initialCapital, durationInYears, annualInflationRate]);

  const purchasingPowerLoss = useMemo(() => {
    return initialCapital - finalCapital;
  }, [initialCapital, finalCapital]);

  const updateSimulatorState = (newState: Partial<SimulatorState>) => {
    setSimulatorState((prevState) => ({ ...prevState, ...newState }));
  };

  return {
    simulatorState,
    finalCapital,
    purchasingPowerLoss,
    updateSimulatorState,
  };
};
