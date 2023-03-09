import classNames from 'classnames';
import TagProps from './Tag.props';
import styles from './tag.module.css';

export const Tag = ({children, size = 's', color = 'ghost', href, className, ...props}: TagProps): JSX.Element => {
  return (
    <div
     className={classNames(styles.tag, styles[size], styles[color])}
     {...props}
    >
      {
        href
          ? <a href={href}>{children}</a>
          : <>{children}</>
      }
    </div>
  )
};