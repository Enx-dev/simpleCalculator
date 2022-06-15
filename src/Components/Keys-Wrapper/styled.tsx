import styled from "styled-components";

const medeiaQuery = (breakpoint: string) => `@media (min-width: ${breakpoint})`;

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  gap: 0.3rem;
  ${medeiaQuery("375px")} {
    gap: 1rem;
  }
  border-radius: 0.7rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "Seven Eight Nine DEL"
    "Four Five Six Plus"
    "One Two Three Minus"
    "Dot Zero Divide Multiply"
    "Reset Reset Equal Equal";
  background-color: ${(props) => props.theme.background.toggleBackground};
`;
