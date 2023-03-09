import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
export default interface P_Props extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode
  size: 's' | 'm' | 'b'
}