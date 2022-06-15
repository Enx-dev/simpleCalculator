import { RootStore } from "./../store/store";
import { createSlice } from "@reduxjs/toolkit";

/*
! Handles Theme Proceed with Causion
*/
const Theme = createSlice({
  name: "Theme",
  initialState: "theme3",
  reducers: {
    setTheme(state, action) {
      // ? switch statement to set theme
      switch (action.payload) {
        case "theme1":
          return (state = "theme1");
        case "theme2":
          return (state = "theme2");
        case "theme3":
          return (state = "theme3");
        default:
          return state;
      }
    },
  },
});

type ArithmethicType = {
  val1: string;
  val2: string;
  total: number;
  operator: string;
  current: any;
};

const initialState: ArithmethicType = {
  val1: "",
  val2: "",
  total: 0,
  operator: "Plus",
  current: "",
};

const Arithmethic = createSlice({
  name: "arithmethic",
  initialState,
  reducers: {
    setVal1(state, action) {
      if (action.payload === ".") {
        if (state.val1.includes(".")) {
          return;
        }
      }

      const toArr = state.val1.split("");
      toArr.push(action.payload);
      state.val1 = toArr.join("");
    },
    setVal2(state, action) {
      if (action.payload === ".") {
        if (state.val2.includes(".")) {
          return;
        }
      }
      console.log(action.payload);
      const toArr = state.val2.split("");
      toArr.push(action.payload);
      state.val2 = toArr.join("");
    },
    setCurrent(state, action) {
      switch (action.payload) {
        case "val1":
          state.current = "val1";
          break;
        case "val2":
          state.current = "val2";
          break;
        case "total":
          state.current = "total";
          break;
        default:
          break;
      }
    },
    setOperator(state, action) {
      state.operator = action.payload;
    },
    evaluate(state) {
      switch (state.operator) {
        case "Plus":
          state.total = +(
            (state.total || +state.val1) + +state.val2
          ).toPrecision(10);
          state.val1 = "";
          state.val2 = "";
          break;
        case "Minus":
          state.total = +(
            (state.total || +state.val1) - +state.val2
          ).toPrecision(10);
          state.val1 = "";
          state.val2 = "";
          break;
        case "Multiply":
          state.total = +(
            (state.total || +state.val1) * +state.val2
          ).toPrecision(10);
          state.val1 = "";
          state.val2 = "";
          break;
        case "Divide":
          state.total = +(
            (state.total || +state.val1) / +state.val2
          ).toPrecision(10);
          state.val1 = "";
          state.val2 = "";
          break;
        default:
          return;
      }
      state.current = "total";
    },
    deleteVAl(state) {
      switch (state.current) {
        case "val1":
          const toArr = state.val1.split("");
          toArr.pop();
          state.val1 = toArr.join("");
          break;
        case "val2":
          const toArr2 = state.val2.split("");
          toArr2.pop();
          state.val2 = toArr2.join("");
          break;
        default:
          return;
      }
    },
    reset(state) {
      state.current = "val1";
      state.operator = "Plus";
      state.total = 0;
      state.val1 = "";
      state.val2 = "";
    },
  },
});

export const { setTheme } = Theme.actions;
export const {
  reset,
  setVal1,
  setCurrent,
  setVal2,
  deleteVAl,
  evaluate,
  setOperator,
} = Arithmethic.actions;
export const ThemeReducer = Theme.reducer;
export const ArithmethicReducer = Arithmethic.reducer;

export const selectTheme = (state: RootStore) => state.Theme;
export const getTotal = (state: RootStore) => state.Number.total;
export const getVal1 = (state: RootStore) => state.Number.val1;
export const getVal2 = (state: RootStore) => state.Number.val2;
export const getCurrent = (state: RootStore) => state.Number.current;
