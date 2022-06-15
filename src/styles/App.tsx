import styled from "styled-components/macro";

export const MainWrapper = styled.div`
  background-color: ${({ theme }) => theme.background.mainBackground};
  min-height: 100vh;
  overflow: auto;
  display: flex;
  height: fit-content;
  place-content: center;
  padding-top: 2rem;
`;
