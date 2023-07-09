import { TextProps } from "./Text.props";
import cn from 'classnames';

import styles from './Text.module.css';

export const Text = ({children, size, className, ...props}: TextProps): JSX.Element => {
  return (
    <p 
    {...props}
    className={cn(styles.p, className, {
      [styles.lg]: size === 'lg',
      [styles.md]: size === 'md',
      [styles.sm]: size === 'sm'
    })}>
      {children}
    </p>
  )
}