import React, { useState } from "react";
import { Container, HeaderWrapper, Toggle, ToggleBall } from "./Styled";
import { useAppDispatch } from "../../app/store/store";
import { setTheme } from "../../app/slice/slice";

const Header = () => {
  const [value, setValue] = useState("1");
  const dispatch = useAppDispatch();
  const changeTheme = (n: string) => {
    dispatch(setTheme(n));
    if (n === "theme1") {
      setValue("1");
    }
    if (n === "theme2") {
      setValue("2");
    }
    if (n === "theme3") {
      setValue("3");
    }
  };

  return (
    <Container>
      <HeaderWrapper>Calc</HeaderWrapper>
      <Toggle>
        <div className='theme'>THEME</div>
        <div className='toggler'>
          <span className='toggler_indicator'>
            <p>1</p> <p>2</p> <p>3</p>
          </span>
          <span className='toggler_span'>
            <button
              className='toggler_btn'
              onClick={() => changeTheme("theme1")}></button>
            <button
              className='toggler_btn'
              onClick={() => changeTheme("theme2")}></button>
            <button
              className='toggler_btn'
              onClick={() => changeTheme("theme3")}></button>
            <ToggleBall value={value} className='toggler_ball'></ToggleBall>
          </span>
        </div>
      </Toggle>
    </Container>
  );
};

export default Header;
