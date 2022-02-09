import { createContext } from "react";


interface Context {
    state: any,
    dispatch: any
}

export const PhoneContext = createContext<Context>({} as Context);