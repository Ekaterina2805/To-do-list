import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "../types/User";
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const UserStateContext = createContext<User | undefined>(undefined);
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const UserDispatchContext = createContext<
  Dispatch<SetStateAction<User | undefined>>
>(() => {});