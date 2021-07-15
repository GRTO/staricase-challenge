import { ErrorDTO } from "./types/errors";

export const hasErrors = (value: any): value is ErrorDTO => {
  return value.message !== undefined;
};
