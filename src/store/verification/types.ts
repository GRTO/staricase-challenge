import { VerificationActionType } from "./actions";

export type IncomeDTO = {
  transaction?: TransactionDTO;
  schema?: Object;
  collection?: CollectionDTO;
};

export type EmploymentDTO = {
  transaction?: TransactionDTO;
  schema?: Object;
  collection?: CollectionDTO;
};

export type VerificationStore = {
  apiKey: string;
  currentStep: number;
  steps: number;
  income?: IncomeDTO;
  employment?: EmploymentDTO;
  transaction?: TransactionDTO;
  schema?: Object;
  collection?: CollectionDTO;
  manualVerification?: boolean;
  exludedBorrower?: boolean;
  partnerName?: string;
};

export type VerificationAction = {
  type: VerificationActionType;
  state: VerificationStore;
};

export type TransactionDTO = {
  transactionId: string;
  createdAt: string;
};

export type CollectionDTO = {
  data: Object;
  collectionId: string;
  transactionId: string;
  metadata: {
    validation: boolean;
    createdAt: string;
  };
};

export type VerificationType = Partial<
  Omit<VerificationStore, "currentStep" | "steps">
>;
