
import { IUser } from '@/interfaces/user';
import { AuthState } from './'

type AuthActionType =
| {type:'[Auth] - Login',payload:IUser}
| {type:'[Auth] - Logout'}

export const authReducer = (state:AuthState, action:AuthActionType):AuthState => {
  switch (action.type) {
        case '[Auth] - Login':
            return{
                ...state,
                isLogged:true,
                user:action.payload
            };

    default:
         return state;
   }
}