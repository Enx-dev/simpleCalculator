import React from "react";
import { Key } from "./styled";
import {
  deleteVAl,
  setVal1,
  setCurrent,
  getCurrent,
  setVal2,
  setOperator,
} from "../../app/slice/slice";
import { useAppDispatch, useAppSelector } from "../../app/store/store";

type Props = {
  value: number;
  name: string;
};
type Symbol = {
  value: string;
  name: string;
};

export const NumericKeys = (props: Props) => {
  const current = useAppSelector(getCurrent);
  const dispatch = useAppDispatch();
  const setNumber = (n: number) => {
    switch (current) {
      case "val1":
        dispatch(setVal1(n));
        break;
      case "val2":
        dispatch(setVal2(n));
        break;
      default:
        return;
    }
  };
  return (
    <Key onClick={() => setNumber(props.value)} value={props.name}>
      {props.value}
    </Key>
  );
};

export const ArithmethicKeys = (props: Symbol) => {
  const dispatch = useAppDispatch();
  const current = useAppSelector(getCurrent);

  const setSymbol = (n: string) => {
    if (n === "Dot") {
      switch (current) {
        case "val1":
          dispatch(setVal1("."));
          break;
        case "val2":
          dispatch(setVal2("."));
          break;
        default:
          return;
      }
    } else {
      dispatch(setOperator(n));
      dispatch(setCurrent("val2"));
    }
  };
  return (
    <Key onClick={() => setSymbol(props.name)} value={props.name}>
      {props.value}
    </Key>
  );
};
export const DelKey = () => {
  const dispatch = useAppDispatch();
  return (
    <Key onClick={() => dispatch(deleteVAl())} value='DEL'>
      Del
    </Key>
  );
};
