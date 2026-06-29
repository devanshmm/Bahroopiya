import axios from "axios";
import {  useEffect, useState } from "react";

   function useFetch(url , data ){
    const[loading , setLoading]= useState(false); 
    useEffect(()=>{
        setLoading(true)
         axios.post(url,data)
        .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
          .finally(() => {
            setLoading(false);
          });
    },[url , data ])
}
export default useFetch;