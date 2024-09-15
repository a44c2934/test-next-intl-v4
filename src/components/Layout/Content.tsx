import classNames from "classnames";
import { ReactNode } from "react";

interface IContent {
  children: ReactNode
  className?: string
  width?: string
  height?: string
}

const Content = ({ children, width, height, className }: IContent) => {
  const customStyle = {
    style: {
      width: width,
      height: height
    },
    className: classNames("content", className)
  }
  return (
    <div {...customStyle}>
      {children}
    </div>
  );
};

export default Content;
