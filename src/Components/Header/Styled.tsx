import styled from "styled-components/macro";

type Ball = {
  value: string;
};

export const HeaderWrapper = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;
export const Toggle = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  .theme {
    font-size: 0.7rem;
    font-weight: bold;
  }
  .toggler {
    width: 100px;
    &_indicator {
      display: flex;
      justify-content: space-around;
      font-size: 0.7rem;
      font-weight: bold;
    }
    &_span {
      display: flex;
      width: 100%;
      position: relative;
      height: 25px;
      border-radius: 25px;
      background-color: ${(props: any) =>
        props.theme.background.toggleBackground};
      .toggler_btn {
        width: 100%;
        background-color: transparent;
        border: none;
      }
    }
  }
`;
export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding-inline: 1rem;
  align-items: flex-end;
  boder-radius: 0.7rem;
  color: ${(props: any) => props.theme.text.subText};
`;
export const ToggleBall = styled.span`
  width: 25px;
  height: 25px;
  ${(props: Ball) => {
    switch (props.value) {
      case "1":
        return "left:0;";
      case "2":
        return "left: 0; right: 0;margin-inline: auto;";
      case "3":
        return "right:0;";
    }
  }}
  position: absolute;
  border-radius: 50%;
  background-color: ${(props: any) => props.theme.Keys.resetBackground};

  &:hover {
    background-color: ${(props: any) => props.theme.Keys.resetHoverBackground};
  }
`;
