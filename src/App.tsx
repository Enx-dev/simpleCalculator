import React, { useEffect } from "react";
import { MainWrapper } from "./styles/App";
import { ThemeProvider } from "styled-components";
import { theme1, theme2, theme3 } from "./Theme/Theme";
import Container from "./Components/Container/Container";
import Screen from "./Components/screen/Screen";
import KeyWrapper from "./Components/Keys-Wrapper/KeyWrapper";
import Header from "./Components/Header/Header";
import { ArithmethicKeys, NumericKeys, DelKey } from "./Components/Keys/Keys";
import { Numbers, Symbols } from "./utils/Numbers";
import { EqualKey, ResetKey } from "./Components/special-keys/SpecialKeys";
import { useAppSelector, useAppDispatch } from "./app/store/store";
import { selectTheme, setCurrent } from "./app/slice/slice";

function App() {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  /*
   * useEffect sets initial state of View
   */
  useEffect(() => {
    dispatch(setCurrent("val1"));
  }, [dispatch]);

  return (
    <ThemeProvider
      theme={
        theme === "theme1" ? theme1 : theme === "theme2" ? theme2 : theme3
      }>
      <MainWrapper>
        <Container>
          <Header />
          <Screen />
          <KeyWrapper>
            {Numbers.map((number) => (
              <NumericKeys value={number.id} name={number.name} />
            ))}
            {Symbols.map((symbol) => (
              <ArithmethicKeys value={symbol.id} name={symbol.name} />
            ))}
            <DelKey />
            <ResetKey />
            <EqualKey />
          </KeyWrapper>
        </Container>
      </MainWrapper>
    </ThemeProvider>
  );
}

export default App;
