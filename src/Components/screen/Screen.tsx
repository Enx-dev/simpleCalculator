// import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useAppSelector} from "../../app/store/store";
import { ScreenWrapper, Text } from "./styled";
import { getVal1, getVal2, getTotal, getCurrent } from "../../app/slice/slice";
type Props = {};

const Screen = (props: Props) => {
  const Val1 = useAppSelector(getVal1);
  const Val2 = useAppSelector(getVal2);
  const total = useAppSelector(getTotal);
  const current = useAppSelector(getCurrent);

  return (
    <ScreenWrapper>
      {current === "val1" ? (
        <Text>{Val1 || "0"}</Text>
      ) : current === "val2" ? (
        <Text>{Val2 || "0"}</Text>
      ) : (
        <Text>{total}</Text>
      )}
    </ScreenWrapper>
  );
};

export default Screen;
