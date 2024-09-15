import classNames from "classnames";
import { ReactNode } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

interface INavbar {
  className?: string
}

const Footer = ({ className = "text-center" }: INavbar) => {
  return (
    <footer>
      <div className={className}>
        versions 1.01
      </div>
    </footer>
  );
};

export default Footer;