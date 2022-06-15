import styled from "styled-components/macro";

export const ScreenWrapper = styled.div`
  height: 100px;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.background.screenBackground};
  direction: ltr;
  display: flex;
  overflow: auto;
  border-radius: 0.7rem;
  align-items: center;
  justify-content: end;
  padding-right: 1rem;
`;
export const Text = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.text.subText};
`;
