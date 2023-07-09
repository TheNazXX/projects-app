import { TagProps } from "./Tag.props";
import cn from "classnames";
import styles from "./Tag.module.css";

export const Tag = ({children, href, size='sm', color='ghost', className, ...props}: TagProps): JSX.Element => {
  return (
    <div
    {...props}
    className={cn(styles.tag, className, {
      [styles.sm]: size === 'sm',
      [styles.md]: size === 'md',

      [styles.ghost]: color === 'ghost',
      [styles.red]: color === 'red',
      [styles.grey]: color === 'grey',
      [styles.green]: color === 'green',
      [styles.primary]: color === 'primary'
    })}
    >
      {
        href 
        ? <a href={href}>{children}</a>
        : <>{children}</>
      }
    </div>
  )
}