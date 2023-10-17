import { useQuery } from "react-query";
import axios from "axios";

export function useBuscarInfoQuery(params) {
  return useQuery(
    ["buscarInfoQuery",params], buscarInfoQuery, {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: false,
    enabled: true,
  });
}

export const buscarInfoQuery = async (params) => { 
  console.log("params original",params);
  console.log("params detalle ",params.queryKey);

  const [queryName, paramsFilter] = params.queryKey;
 
  let url3= ` https://dog.ceo/api/breeds/list/all`;
  
  const { data } = await axios.get(url3);


  let perros ;
  perros = data.results.map((item , index)=>{
    return {label: item.name , id: index +1 }  
  });
  
 
  return perros;
  };