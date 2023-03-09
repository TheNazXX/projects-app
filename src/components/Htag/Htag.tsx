import { HtagProps } from "./Htag.props";
import styles from './Htag.module.css';

export const Htag = ({tag, children}: HtagProps): JSX.Element => {
  return <h1 className={styles[tag]}>{children}</h1>;
};