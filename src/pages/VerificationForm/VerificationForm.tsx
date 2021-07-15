import { FC } from "react";
import { useVerification } from "../../hooks/Verification/useVerification";
import { ApiKeyForm } from "./ApiKeyForm/ApiKeyForm";
import { CollectionForm } from "./CollectionForm/CollectionForm";
import { TransactionForm } from "./TransactionForm/TransactionForm";
import { VerificationOptionForm } from "./VerificationOptionForm/VerificationOptionForm";

export const VerificationForm: FC = () => {
  const { currentStep } = useVerification();
  return (
    <>
      {currentStep === 0 && <ApiKeyForm />}
      {currentStep === 1 && <TransactionForm />}
      {currentStep === 2 && <CollectionForm />}
      {currentStep === 3 && <VerificationOptionForm />}
    </>
  );
};
