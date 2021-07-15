import { createContext, Dispatch } from "react";

import { VerificationAction, VerificationStore } from "./types";

export const VerificationContext = createContext<
  | { state: VerificationStore; dispatch: Dispatch<VerificationAction> }
  | undefined
>(undefined);
