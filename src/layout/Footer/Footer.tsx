import FooterProps from "./Footer.props";
import {P} from '../../components';
import styles from './footer.module.css';
import classNames from "classnames";
import {format} from 'date-fns';

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
  return (
    <footer
      className={classNames(className, styles.footer)}
      {...props}
    >
      <div>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </div>
      <a href='/'>Пользовательское соглашение</a>
      <a href='/'>Политика конфиденциальности</a>
    </footer>
  )
}