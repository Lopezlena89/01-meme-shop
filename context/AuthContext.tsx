import { IUser } from '@/interfaces/user';
import { createContext } from 'react';


interface ContextProps{
    isLogged : Boolean,
    user?:IUser

}

export const AuthContext = createContext({} as ContextProps);