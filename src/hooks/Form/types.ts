export interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string | RegExp;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
}

export type ErrorRecord<T> = Record<keyof T, string>;

export type Validations<T extends {}> = Partial<Record<keyof T, Validation>>;
