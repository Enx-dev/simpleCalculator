import React from "react";
import { SpecialKeys } from "./styled";
import { reset, evaluate } from "../../app/slice/slice";
import { useAppDispatch } from "../../app/store/store";

type Props = {};

export const ResetKey = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <SpecialKeys onClick={() => dispatch(reset())} value='Reset'>
      RESET
    </SpecialKeys>
  );
};
export const EqualKey = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <SpecialKeys onClick={() => dispatch(evaluate())} value='Equal'>
      =
    </SpecialKeys>
  );
};
