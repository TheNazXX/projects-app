export interface CustomMenuProps {
  title: string;
  state: string;
  filters: string[];
  setState: (value: string) => void
};