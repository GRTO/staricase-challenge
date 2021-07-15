import {
  EMPLOYMENT_TRANSACTION_BODY,
  INCOME_TRANSACTION_BODY,
} from "./contants";
import { CollectionDTO } from "./types/collections";
import { ErrorDTO } from "./types/errors";
import { TransactionDTO } from "./types/transactions";
import { hasErrors } from "./utils";

export const useService = () => {
  const sendRequest = async <T>(
    input: RequestInfo,
    init?: RequestInit | undefined
  ): Promise<T> => {
    try {
      const res = await fetch(input, init);
      const result = res.json();

      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  const createTransaction = async (apiKey: string) => {
    try {
      const responseEmploymentJson = await sendRequest<
        TransactionDTO | ErrorDTO
      >(`https://documentation.staircaseapi.com/employment/transactions`, {
        method: "POST",
        headers: { "x-api-key": apiKey },
      });
      const responseIncomeJson = await sendRequest<TransactionDTO | ErrorDTO>(
        `https://documentation.staircaseapi.com/income/transactions`,
        {
          method: "POST",
          headers: { "x-api-key": apiKey },
        }
      );

      const [income, employment] = await Promise.all([
        responseIncomeJson,
        responseEmploymentJson,
      ]);

      if (hasErrors(income) || hasErrors(employment)) {
        return { errorsIncome: income as ErrorDTO, errosEmployment: employment as ErrorDTO };
      }

      return {
        incomeTransaction: {
          createdAt: income.created_at,
          transactionId: income.transaction_id,
        },
        employmentTransaction: {
          createdAt: employment.created_at,
          transactionId: employment.transaction_id,
        },
      };
    } catch (error) {
      throw new Error(error);
    }
  };

  const createCollection = async (
    apiKey: string,
    emplymentTransactionId: string,
    incomeTransactionId: string
  ) => {
    try {
      const responseEmploymentJson = await sendRequest<CollectionDTO>(
        `https://documentation.staircaseapi.com/employment/transactions/${emplymentTransactionId}/collections`,
        {
          method: "POST",
          headers: { "x-api-key": apiKey },
          body: JSON.stringify(EMPLOYMENT_TRANSACTION_BODY),
        }
      );
      const responseIncomeJson = await sendRequest<CollectionDTO>(
        `https://documentation.staircaseapi.com/income/transactions/${incomeTransactionId}/collections`,
        {
          method: "POST",
          headers: { "x-api-key": apiKey },
          body: JSON.stringify(INCOME_TRANSACTION_BODY),
        }
      );

      return {
        employmentCollection: responseEmploymentJson,
        incomeCollection: responseIncomeJson,
      };
    } catch (error) {
      throw new Error(error);
    }
  };

  return { createTransaction, createCollection };
};
