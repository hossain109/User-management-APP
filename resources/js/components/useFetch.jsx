import axios from 'axios'
import React,{Fragment,useEffect,useState} from 'react'


export default function useFetch(url) {
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState(false)

    useEffect(()=>{ 
        //let url= "https://jsonplaceholder.typicode.com/users";
        axios.get(url)
            .then((response)=>{
                if(response.status==200){
                    setData(response.data)
                    setLoading(false)
                    setError(false)
                }else{
                    setError(true)
                }
            })
            .catch((error)=>setError(true))

    },[url])

    return { data, loading, error};

}
