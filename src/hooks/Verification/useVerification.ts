import { useContext } from "react";
import { generateUUID } from "../../utils/uuidv4";
import { VerificationActionType } from "../../store/verification/actions";
import {
  CollectionDTO,
  VerificationType,
} from "../../store/verification/types";
import { VerificationContext } from "../../store/verification/VerificationContext";

export const useVerification = () => {
  const context = useContext(VerificationContext);

  if (context === undefined) {
    throw new Error(
      "VerificationContext should not be used outside useVerification custom hook"
    );
  }

  const { state, dispatch } = context;

  // TODO: Replace when backend transaction endpoint is available
  const createRandomTransaction = () => {
    const transactionId = generateUUID();
    const createdAt = new Date().toISOString();

    if (!state.transaction) {
      dispatch({
        type: VerificationActionType.SET_TRANSACTION,
        state: { ...state, transaction: { transactionId, createdAt } },
      });
    }
  };

  // TODO: Replace when backend collection endpoint is available
  const createRandomCollection = (): CollectionDTO => {
    const collectionId = generateUUID();
    const createdAt = new Date().toISOString();

    return {
      data: state.schema || {},
      collectionId,
      metadata: { createdAt, validation: false },
      transactionId: state.transaction?.transactionId || "",
    };
  };

  const prevStep = (payload: VerificationType) => {
    dispatch({
      type: VerificationActionType.UPDATE_CURRENT_STEP,
      state: { ...state, ...payload, currentStep: state.currentStep - 1 },
    });
  };

  const nextStep = (payload: VerificationType) => {
    dispatch({
      type: VerificationActionType.UPDATE_CURRENT_STEP,
      state: { ...state, ...payload, currentStep: state.currentStep + 1 },
    });
  };

  return {
    apiKey: state.apiKey,
    currentStep: state.currentStep,
    transaction: state.transaction,
    schema: state.schema,
    prevStep,
    nextStep,
    createRandomTransaction,
    createRandomCollection,
  };
};
