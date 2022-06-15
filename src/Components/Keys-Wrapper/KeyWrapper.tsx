import React from "react";
import { Container } from "./styled";

type Props = {
  children: React.ReactNode;
};

const KeyWrapper = (props: Props) => {
  return <Container>{props.children}</Container>;
};

export default KeyWrapper;
