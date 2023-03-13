import { Menu } from "@/components/Menu/Menu";
import classNames from "classnames";
import SidebarProps from "./Sidebar.props";
import styles from './sidebar.module.css';

export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
  return (
    <div
      className={classNames(className, styles.sidebar)}
      {...props}
    >
      <Menu />
    </div>
  )
}