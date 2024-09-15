import { ReactNode } from "react";
import NavbarHead from "./NavbarHead";
import Footer from "./Footer";


export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavbarHead />
      <main>{children}</main>
      <Footer />
    </>
  )
}