import cn from "classnames"
import { ButtonProps } from "./Button.props";
import ArrowIcon from './arrow.svg';

import styles from './Button.module.css';

export const Button = ({children, apperance, arrow='none', className, ...props}: ButtonProps): JSX.Element => {
  return (
    <button
      {...props}
      className={cn(styles.button, className, {
        [styles.primary]: apperance === 'primary',
        [styles.ghost]: apperance === 'ghost'

      })}
    >
      {children}
      {arrow !== 'none' && <span className={cn(styles.arrow, {
        [styles.down]: arrow === 'down',
        [styles.right]: arrow === 'right'
      })}><ArrowIcon /></span>}
    </button>
  )
}