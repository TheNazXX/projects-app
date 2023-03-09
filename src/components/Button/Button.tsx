import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import  classNames from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({appearance, arrow = 'none', children, className, ...props}: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(styles.button, styles[appearance])}
      {...props}
    >
      {children}
      {arrow !== 'none' && <span className={classNames(styles.svg, styles[arrow])}><ArrowIcon /></span>}
    </button>
  )
}