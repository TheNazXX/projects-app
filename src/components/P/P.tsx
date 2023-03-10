import P_Props from './P.props';
import styles from './p.module.css';
import classNames from 'classnames';

export const P = ({ children, size, className, ...props }: P_Props): JSX.Element => {
  console.log(className)
  return( 
  <p 
    className={classNames(className, styles[size])}
    {...props}
  >
    {children}
   </p>);
};
