export interface OptionProps {
  _id: number;
  title: string;
  slug: string;
  createdAt: string;
  name?: string;
  stateId?: string;
}

export interface SelectBoxProps {
  placeholder?: string;
  value?: string;
  options: OptionProps[];
  type?: string;
  onChange: (params: string) => void;
  disabled?: boolean;
}
