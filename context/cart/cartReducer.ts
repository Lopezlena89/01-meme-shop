import { CartState } from './'

type CartActionType =
| {type:'[Auth] - ActionName'}

export const cartReducer = (state:CartState, action:CartActionType):CartState => {
  switch (action.type) {
  //  case '[Auth] - ActionName':
  //     return{
  //        ...state,
  //      };

    default:
         return state;
   }
}