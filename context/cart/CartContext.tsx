import { createContext } from 'react';


interface ContextProps{
     prop1:boolean;
}

export const CartContext = createContext({} as ContextProps);