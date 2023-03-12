import { Menu } from "@/components/Menu/Menu";
import SidebarProps from "./Sidebar.props";

export const Sidebar = (props: SidebarProps): JSX.Element => {
  return (
    <div
      {...props}
    >
      <Menu />
    </div>
  )
}