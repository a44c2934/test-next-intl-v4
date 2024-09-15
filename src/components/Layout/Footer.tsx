import classNames from "classnames";
import { ReactNode } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

interface INavbar {
  className?: string
}

const Footer = ({ className }: INavbar) => {
  return (
    <footer>
      <div className="text-center">
        versions 1.01
      </div>
    </footer>
  );
};

export default Footer;