import { FC, useState } from "react";
import { CheckBox, Form, Input } from "../../../components";

import { useForm } from "../../../hooks/Form/useForm";
import { useVerification } from "../../../hooks/Verification/useVerification";
import { Button, Paragraph, Title } from "../../../styles/GlobalComponents";
import { VerificationOptionFormType } from "./types";

export const VerificationOptionForm: FC = () => {
  const { nextStep, prevStep } = useVerification();
  const [manualVerification, setManualVerification] = useState(false);
  const [exludedBorrower, setExcludedBorrower] = useState(false);

  const {
    data: { partnerName },
    handleFormChange,
    handleOnSubmit,
  } = useForm<VerificationOptionFormType>({
    validations: {},
    onSubmit: (formData) => {
      const { partnerName } = formData;

      nextStep({ partnerName, manualVerification, exludedBorrower });
    },
    initialValues: {
      partnerName: "",
    },
  });
  return (
    <>
      <Title textAlign="center">Verification Request form</Title>
      <Paragraph>Verification Request</Paragraph>
      <Form onSubmit={handleOnSubmit}>
        <Input
          name="partnerName"
          value={partnerName}
          label="Partner name"
          onChange={handleFormChange("partnerName")}
        />
        <CheckBox
          label="Manual Verification"
          initialValue={false}
          onChange={setManualVerification}
        />
        <CheckBox
          label="Excluded Borrower"
          initialValue={false}
          onChange={setExcludedBorrower}
        />
        <Button type="button" onClick={() => prevStep({})}>
          Back
        </Button>
        <Button type="submit">Next</Button>
      </Form>
    </>
  );
};
