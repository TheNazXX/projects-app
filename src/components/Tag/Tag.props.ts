import { ReactNode } from 'react';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

export default interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  children: ReactNode,
  size?: 's' | 'm',
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary',
  href?: string
};