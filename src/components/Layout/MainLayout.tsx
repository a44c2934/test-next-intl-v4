import { ReactNode } from "react";
import NavbarHead from "./NavbarHead";
import Footer from "./Footer";


const MainLayout = ({ children, page }: { children: ReactNode, page: any }) => {
  if (page.statusCode === 404) {
    return <>{children}</>
  }
  return (
    <>
      <NavbarHead />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default MainLayout;