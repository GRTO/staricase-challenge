import { FC, useState } from "react";
import { Form, JsonEditor } from "../../../components";
import { useForm } from "../../../hooks/Form/useForm";
import { useVerification } from "../../../hooks/Verification/useVerification";
import { Button, Paragraph, Title } from "../../../styles/GlobalComponents";
import { DEFAULT_SCHEMA } from "./contants";
import { CollectionFormType } from "./types";

export const CollectionForm: FC = () => {
  const {
    nextStep,
    prevStep,
    schema: verificationSchema,
    createRandomCollection,
  } = useVerification();

  const [schema, setSchema] = useState<Object>(
    verificationSchema || DEFAULT_SCHEMA
  );
  const [schemaError, setSchemaError] = useState<boolean>(false);

  const { handleOnSubmit } = useForm<CollectionFormType>({
    validations: {
      schema: {
        required: { value: true, message: "The schema is required" },
      },
    },
    onSubmit: (formData) => {
      const { schema } = formData;

      if (schema && schemaError) {
        // TODO: Replace it when income and employement collection POST dont throw errors
        const incomeCollection = createRandomCollection();
        const employmentCollection = createRandomCollection();

        nextStep({
          income: { collection: incomeCollection },
          employment: { collection: employmentCollection },
        });
        nextStep({
          schema,
          income: { collection: incomeCollection },
          employment: { collection: employmentCollection },
        });
      }
    },
    initialValues: {
      schema: verificationSchema || DEFAULT_SCHEMA,
    },
  });

  return (
    <>
      <Title textAlign="center">Collection generation form</Title>
      <Paragraph>
        Describe the employment verification via a schema in JSON format:
      </Paragraph>
      <Paragraph>
        Copy one of the example schemas given below for the request body, and
        replace the example values in schema with your values, or Invoke{" "}
        <strong>Retrieve Example JSON</strong> to get an example schema
        populated with null values, which you can then replace with your own.
      </Paragraph>
      <JsonEditor
        id="CollectionSchema"
        placeholder={schema}
        width="100%"
        onChange={(json) => {
          if (!json.error) {
            setSchema(json.jsObject || {});
            setSchemaError(false);
          } else {
            setSchemaError(true);
          }
        }}
      />
      <Form onSubmit={handleOnSubmit}>
        <Button type="button" onClick={() => prevStep({})}>
          Back
        </Button>
        <Button
          type="button"
          disabled={schemaError}
          onClick={() => nextStep({ schema })}
        >
          Next
        </Button>
      </Form>
    </>
  );
};
