import classNames from "classnames";
import { ReactNode } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LanguageSwitcher from "../LanguageSwitcher";

interface INavbar {
  className?: string
}

const NavbarHead = ({ className }: INavbar) => {
  return (
    <header>
      <Navbar expand="lg" className={className}>
        <Container>
          <Navbar.Brand href="#home">Next-intl-v4</Navbar.Brand>
          <div className="d-flex align-items-center gap-2">
            <div className="d-block d-lg-none">
              <LanguageSwitcher />
            </div>
            <Navbar.Toggle aria-controls="navbar-nav" />
          </div>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-none d-lg-block">
            <LanguageSwitcher />
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarHead;