import LayoutProps from "./Layout.props";
import {Header, Sidebar, Footer} from './index';

export const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <>
      <Header/>
      <div>
        <Sidebar />
        <div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}