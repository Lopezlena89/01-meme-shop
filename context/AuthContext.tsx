
import { IUser } from '@/interfaces/user';
import { createContext } from 'react';


interface ContextProps{
    isLogged : Boolean,
    user?:IUser,

    //Method
    registerUser: (name: string, email: string, password: string) => Promise<{hasError: boolean;message?: string}>,
    loginUser:(email: string, password: string) => Promise<{hasError: boolean;message?: string}>,
}

export const AuthContext = createContext({} as ContextProps);