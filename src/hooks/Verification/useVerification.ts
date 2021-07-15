import { useContext } from "react";
import { generateUUID } from "../../utils/uuidv4";
import { VerificationActionType } from "../../store/verification/actions";
import {
  CollectionDTO,
  VerificationType,
} from "../../store/verification/types";
import { VerificationContext } from "../../store/verification/VerificationContext";
import { SCHEMA } from "./contants";

export const useVerification = () => {
  const context = useContext(VerificationContext);

  if (context === undefined) {
    throw new Error(
      "VerificationContext should not be used outside useVerification custom hook"
    );
  }

  const { state, dispatch } = context;

  // TODO: Replace when backend collection endpoint is available
  const createRandomCollection = (transactionId: string | undefined): CollectionDTO => {
    const collectionId = generateUUID();
    const createdAt = new Date().toISOString();

    return {
      data: SCHEMA || {},
      collectionId,
      metadata: { createdAt, validation: false },
      transactionId: transactionId || "",
    };
  };

  const prevStep = (payload: VerificationType) => {
    dispatch({
      type: VerificationActionType.UPDATE_CURRENT_STEP,
      state: { ...state, ...payload, currentStep: state.currentStep - 1 },
    });
  };

  const nextStep = (payload: VerificationType) => {
    const income = { ...state.income, ...payload.income };
    const employment = { ...state.employment, ...payload.employment };
    dispatch({
      type: VerificationActionType.UPDATE_CURRENT_STEP,
      state: {
        ...state,
        ...payload,
        income,
        employment,
        currentStep: state.currentStep + 1,
      },
    });
  };

  return {
    apiKey: state.apiKey,
    currentStep: state.currentStep,
    schema: state.schema,
    income: state.income,
    employment: state.employment,
    prevStep,
    nextStep,
    createRandomCollection,
  };
};
