import React from "react";

interface CenteredProps {
  children: React.ReactNode;
}

const Centered = ({ children }: CenteredProps) => {
  return (
    <div
      style={{
        maxWidth: "32rem",
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default Centered;
