export interface CashRegister {
  id: string;
  name: string;
  initial: string;
  status: 'available' | 'in_use';
  user: string;
}

export interface NumericKeyboardProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  onConfirm?: () => void;
  showConfirm?: boolean;
}