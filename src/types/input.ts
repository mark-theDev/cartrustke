// src/types/input.d.ts

export type InputProps = {
    type: string;
    placeholder?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
  };
  