import { ReactNode } from "react";

interface H1Props {
  children: ReactNode;
}

const H1 = ({ children }: H1Props) => {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
        {children}
      </h1>
    </>
  );
};

export default H1;
