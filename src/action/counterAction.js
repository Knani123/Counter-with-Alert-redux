import { ADD, MINUS, RESET } from "./type";

export const plus = (n) => {
  return { type: ADD, payload: n };
};
export const minus = (n) => {
  return { type: MINUS, payload: n };
};
export const reset = () => {
  return { type: RESET };
};
