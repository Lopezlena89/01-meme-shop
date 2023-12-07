import { FC, useReducer } from 'react';
import { CartContext,cartReducer } from './';



export interface CartState{
     property:boolean,
}
const Cart_INITIAL_STATE:CartState ={
     property:false,
}

export const CartProvider:FC = ({children}) =>{

     const [state, dispatch] = useReducer(cartReducer,Cart_INITIAL_STATE)

     return(
          <CartContext.Provider value={{
                ...state
          }}>
               {children}
          </CartContext.Provider>
     )
}