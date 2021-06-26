export interface StepsProps {
  className?: string;
  initial?: number;
  style?: React.CSSProperties;
  onChange?: (current: number) => void;
  children: JSX.Element[];
  titleList: TitleProps[];
  submit: () => void;
  selectedState: string;
  selectedCity: string;
  selectedCategory: [];
}

export interface TitleProps {
  index: number;
  title: string;
  description?: string;
}
