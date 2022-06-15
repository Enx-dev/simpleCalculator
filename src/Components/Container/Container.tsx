import React from "react";
import { ContainerWrapper } from "./Styled";
type Props = {
  children: React.ReactNode;
};

const Container = (props: Props) => {
  return <ContainerWrapper>{props.children}</ContainerWrapper>;
};

export default Container;
