
import { useState } from "react"

export const useForm = (initialState = {}) =>{

    const [state, setState] = useState(initialState);

    const onInputChange = ({target}) =>{

        const {name,value} = target;
        setState({
            ...state,
            [name]:value
        })
    }

    const handleReset = () =>{
        setState(initialState);
    }

    return{
        ...state,
        state,
        onInputChange,
        handleReset
    }
    

}