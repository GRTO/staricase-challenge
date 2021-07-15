import { FC, useReducer, Reducer } from "react";
import { VerificationAction, VerificationStore } from "./types";
import { VerificationContext } from "./VerificationContext";
import { VerificationReducer } from "./VerificationReducer";

export const VerificationProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer<
    Reducer<VerificationStore, VerificationAction>
  >(VerificationReducer, { apiKey: "", currentStep: 0, steps: 0 });

  return (
    <VerificationContext.Provider value={{ state, dispatch }}>
      {children}
    </VerificationContext.Provider>
  );
};
