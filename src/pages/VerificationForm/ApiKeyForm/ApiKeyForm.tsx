import { FC } from "react";
import { Form, Input } from "../../../components";
import { useForm } from "../../../hooks/Form/useForm";
import { useVerification } from "../../../hooks/Verification/useVerification";
import { Paragraph, Button, Title } from "../../../styles/GlobalComponents";
import { ApiKeyFormType } from "./types";

export const ApiKeyForm: FC = () => {
  const { nextStep, apiKey: verificationApiKey } = useVerification();

  const {
    data: { apiKey },
    errors: { apiKey: errorApiKey },
    handleFormChange,
    handleOnSubmit,
  } = useForm<ApiKeyFormType>({
    validations: {
      apiKey: {
        required: { value: true, message: "API key is required" },
      },
    },
    onSubmit: (formData) => {
      const { apiKey } = formData;

      if (apiKey) {
        nextStep({ apiKey });
      }
    },
    initialValues: {
      apiKey: verificationApiKey,
    },
  });

  return (
    <>
      <Title textAlign="center">API key form</Title>
      <Paragraph>
        Make sure you have an api_key, received via email when you signed up for
        Staircase.
      </Paragraph>
      <Form onSubmit={handleOnSubmit}>
        <Input
          name="apiKey"
          value={apiKey}
          hasError={errorApiKey}
          label="API key"
          onChange={handleFormChange("apiKey")}
        />
        <Button type="submit" disabled={!Boolean(apiKey)}>
          Next
        </Button>
      </Form>
    </>
  );
};
