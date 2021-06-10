export interface OptionProps {
  id: number;
  title: string;
  value: string;
}

export interface SelectBoxProps {
  placeholder?: string;
  value?: string;
  options: OptionProps[];
  type?: string;
  onChange: (params: string) => void;
}
