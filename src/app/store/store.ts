import { ArithmethicReducer, ThemeReducer } from "./../slice/slice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const makeStore = configureStore({
  reducer: {
    Theme: ThemeReducer,
    Number: ArithmethicReducer,
  },
});

export type RootStore = ReturnType<typeof makeStore.getState>;
export type RootDispacth = typeof makeStore.dispatch;

export const useAppDispatch: () => RootDispacth = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
