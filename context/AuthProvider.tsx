import { IUser } from '@/interfaces/user';
import { FC, useReducer } from 'react';
import { AuthContext,authReducer } from './';



export interface AuthState{
    isLogged : Boolean,
    user?:IUser
}
const Auth_INITIAL_STATE:AuthState ={
    isLogged : false,
    
}
interface Props{
    children:React.ReactNode
}

export const AuthProvider:FC<Props> = ({children}) =>{

     const [state, dispatch] = useReducer(authReducer,Auth_INITIAL_STATE)

     return(
          <AuthContext.Provider value={{
                ...state
          }}>
               {children}
          </AuthContext.Provider>
     )
}
