/**
 * @fileoverview Defines the type for the state of the inflation simulator.
 */
export type SimulatorState = {
  initialCapital: number;
  durationInYears: number;
  annualInflationRate: number;
};
