import styled from "styled-components";
type ContainerProps = {
  value: string;
  theme: any;
};

export const SpecialKeys = styled.div`
  background-color: ${(props: ContainerProps) => {
    switch (props.value) {
      case "Reset":
        return props.theme.Keys.delBackground;
      case "Equal":
        return props.theme.Keys.resetBackground;
      default:
        return "";
    }
  }};
  box-shadow: 1.2px 1px 3.5px rgba(0, 0, 0, 0.471),
    0px 5px 2px
      ${(props: ContainerProps) => {
        switch (props.value) {
          case "Reset":
            return props.theme.Keys.delShadow;
          case "Equal": {
            return props.theme.Keys.resetShadow;
          }
        }
      }};
  border-radius: 0.3rem;
  display: flex;
  place-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props: ContainerProps) => {
    switch (props.value) {
      case "Reset":
        return "white";
      case "Equal":
        return props.theme.Keys.keyBackground;
    }
  }};
  grid-area: ${(props: ContainerProps) => props.value};
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${(props: ContainerProps) => {
      switch (props.value) {
        case "Reset":
          return props.theme.Keys.delHoverBackground;
        case "Equal":
          return props.theme.Keys.resetHoverBackground;
      }
    }}
`;
