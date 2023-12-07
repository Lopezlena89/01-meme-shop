
import { FC, useEffect, useReducer } from 'react';
import axios from 'axios';
import { IUser } from '@/interfaces/user';
import memeApi from '@/api/memeApi';
import Cookies from 'js-cookie';
import { AuthContext,authReducer } from '.';

export interface AuthState{
    isLogged : Boolean,
    user?:IUser
}
const AUTH_INITIAL_STATE:AuthState ={
    isLogged : false,
    
}
interface Props{
    children:React.ReactNode
}

export const AuthProvider:FC<Props> = ({children}) =>{

     const [state, dispatch] = useReducer(authReducer,AUTH_INITIAL_STATE);

     useEffect(() => {
          checkToken()
     }, [])

     const checkToken = async( ) =>{
          if(!Cookies.get('token')){
               return;
          }
          try {
               const {data} = await memeApi.get('/user/validateToken');
               
               const {token,user} = data;
               Cookies.set('token',token);
               dispatch({type:'[Auth] - Login',payload:user});
          } catch (error) {
               console.log(error)
               Cookies.remove('token');
          }

     }
     

     const registerUser = async(name:string,email:string,password:string)=> {
          
        try {
          const {data} = await memeApi.post('/user/register',{name,email,password});
          const {user,token} = data;
          Cookies.set('token',token);
          dispatch({type:'[Auth] - Login',payload:user})
          return{
               hasError:false
          }
     
        } catch (error) {
             if(axios.isAxiosError(error)){
                  return{
                       hasError:true,
                       message:error.response?.data.message
                  }
             }
             return{
                  hasError:true,
                  message:'No se pudo crear el usuario - intente de nuevo'
             }
        }
   }

   const loginUser = async(email:string,password:string):Promise<boolean>=>{

     try {
          const {data} = await memeApi.post('/user/login',{email,password});
          const {token,user} = data;
          Cookies.set('token',token);
          dispatch({type:'[Auth] - Login',payload:user});
          return true


     } catch (error) {
          return false;
     }
   }

   const logOut = async() =>{
          Cookies.remove('token');
          dispatch({type:'[Auth] - Logout'})
   }

     return(
          <AuthContext.Provider value={{
                ...state,
                //Method
                registerUser,
                loginUser,
                logOut
          }}>
               {children}
          </AuthContext.Provider>
     )
}