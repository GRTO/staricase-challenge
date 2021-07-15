import { Reducer } from "react";
import { VerificationActionType } from "./actions";
import { VerificationAction, VerificationStore } from "./types";

export const VerificationReducer: Reducer<
  VerificationStore,
  VerificationAction
> = (state, action) => {
  switch (action.type) {
    case VerificationActionType.SET_STEPS:
    case VerificationActionType.UPDATE_CURRENT_STEP:
    case VerificationActionType.SET_TRANSACTION:
      return { ...state, ...action.state };
    default:
      return state;
  }
};
