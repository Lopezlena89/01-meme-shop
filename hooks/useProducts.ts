
import useSWR from 'swr'

const fetcher = (...args:[Key:string]) => fetch(...args).then(res => res.json());

export const  useProducts = (url:string)=>{
    
    // const { data, error, isLoading } = useSWR<IProduct[]>(`/api${url}`, fetcher,config);
    const { data, error, isLoading } = useSWR(`/api${url}`,fetcher);
    return{
        data,
        isLoading,
        isError: error
    }
}




