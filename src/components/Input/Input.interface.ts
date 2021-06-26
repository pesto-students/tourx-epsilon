import { CSSProperties } from "styled-components";

export interface InputProps {
  value?: string;
  placeholder?: string;
  onChange?: (event: any) => void;
  style?: CSSProperties;
  icon?: string;
  type?: string;
}
