import styled from "styled-components";
type ContainerProps = {
  value: string;
  theme: any;
};

export const Key = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  border-radius: 0.4rem;
  font-size: 1.8rem;
  box-shadow: 1.2px 1px 3.5px rgba(0, 0, 0, 0.471),
    0px 4px 2px
      ${(props: ContainerProps) => {
        switch (props.value) {
          case "DEL":
            return props.theme.Keys.delShadow;
          default:
            return props.theme.Keys.keyBackground;
        }
      }};

  font-weight: bold;
  color: ${(props: ContainerProps) => {
    switch (props.value) {
      case "DEL":
        return "white";
      default:
        return props.theme.text.mainText;
    }
  }};
  grid-area: ${(props: ContainerProps) => props.value};
  width: 100%;
  height: 70px;
  background-color: ${(props: ContainerProps) => {
    switch (props.value) {
      case "DEL":
        return props.theme.Keys.delBackground;
      default:
        return props.theme.Keys.keyBackground;
    }
  }};
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${(props: ContainerProps) => {
      switch (props.value) {
        case "DEL":
          return props.theme.Keys.delHoverBackground;
        default:
          return props.theme.Keys.keyHoverBackground;
      }
    }}
`;
