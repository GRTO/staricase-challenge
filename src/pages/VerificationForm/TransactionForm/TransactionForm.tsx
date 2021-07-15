import { FC } from "react";
import { Loader } from "../../../components";
import { useStopwatch } from "../../../hooks/Timer/useStopwatch";
import { useVerification } from "../../../hooks/Verification/useVerification";
import { Button, Paragraph, Title } from "../../../styles/GlobalComponents";
import {
  TitleTransaction,
  Transaction,
  TransactionContainer,
} from "./TransactionFormStyles";

export const TransactionForm: FC = () => {
  const { createRandomTransaction, transaction, nextStep, prevStep } =
    useVerification();
  // TODO: replace when backend transaction endpoint is available
  useStopwatch(createRandomTransaction, 5000);

  return (
    <>
      <Title textAlign="center">Transaction generation form</Title>
      <Paragraph>
        Transactions in Staircase are containers for all the data related to an
        instance of a transaction type. They enable you to correlate the output
        of various products to a single transaction type, where the transaction
        type depends on your line of business.
      </Paragraph>
      <Paragraph>
        Transactions are identified by a unique key called transaction_id. As
        you use different Staircase products to gather the data needed for a
        specific instance of your transaction type, and receive different sets
        of output from each product, use the same transaction_id to correlate
        all the outputs to the same transaction.
      </Paragraph>
      <TransactionContainer>
        {transaction ? (
          <Transaction>
            <TitleTransaction>Transaction finished</TitleTransaction>
            <div>
              Your current <i>transaction_id</i> is{" "}
              <strong>{transaction.transactionId}</strong> and it was created at{" "}
              <strong>{transaction.createdAt}</strong>
            </div>
          </Transaction>
        ) : (
          <>
            <Loader />
          </>
        )}
      </TransactionContainer>
      <Button type="button" onClick={() => prevStep({})}>
        Back
      </Button>
      <Button
        type="button"
        disabled={!transaction}
        onClick={() => nextStep({})}
      >
        Next
      </Button>
    </>
  );
};
