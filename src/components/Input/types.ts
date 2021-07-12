export interface InputProps {
  value?: string;
  name: string;
  label?: string;
  hasError?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}
