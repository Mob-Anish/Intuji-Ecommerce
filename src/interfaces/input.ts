import type { ChangeEvent } from "react";

type InputType = "text" | "number";

type InputSize = "xs" | "sm" | "md" | "lg";

export interface InputProps {
  placeholder?: string;
  bgColor?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  borderCol?: string | undefined; //border color name
  type?: InputType;
  label?: string;
  size?: InputSize;
  defaultValue?: any;
  onKeyUp?: any;
}
