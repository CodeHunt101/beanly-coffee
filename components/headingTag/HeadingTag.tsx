import { ReactNode } from "react";

type HeadingTagProps = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: ReactNode;
};

const HeadingTag = ({ level, className, children }: HeadingTagProps) => {
  const Tag = level;
  return <Tag className={className}>{children}</Tag>;
};

export default HeadingTag;
