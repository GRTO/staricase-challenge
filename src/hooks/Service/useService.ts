import { TransactionDTO } from "./types/transactions";

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

  const createTransaction = async (
    type: "employment" | "income",
    apiKey: string
  ) => {
    try {
      const responseJson = await sendRequest<TransactionDTO>(
        `https://documentation.staircaseapi.com/${type}/transactions`,
        {
          method: "POST",
          headers: { "x-api-key": apiKey },
        }
      );
      const result = responseJson;

      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  return { createTransaction };
};
