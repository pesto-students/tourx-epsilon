interface ModalProps {
  open: boolean;
  onClose: () => void;
  ariaLabelledby: string;
  ariaDescribedby: string;
  categories: [];
  searchCategory: (value?: string) => void;
}

export default ModalProps;
