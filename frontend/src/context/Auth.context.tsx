import { createContext, Dispatch, SetStateAction } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const AuthStateContext = createContext<string>("");
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const AuthDispatchContext = createContext<
  Dispatch<SetStateAction<string>>
>(() => {});