export interface InputProps {
  value?: string;
  name: string;
  label?: string;
  hasError?: string;
  testId?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}
