'use client'

import { useState } from "react"

interface Prop{
    name?:string,
    email:string,
    password:string,
    state: {
        email: string;
        password: string;
    },
    onInputChange: (e: any) => void,
    handleReset: () => void
}

export const useForm = (initialState = {name:'',email:'',password:''}):Prop =>{

    const [state, setState] = useState(initialState);

    const onInputChange = (e:any) =>{

        const {name,value} = e.target;
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