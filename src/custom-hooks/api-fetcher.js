import axios from "axios";
import { useEffect, useState } from "react";

export const FetchApi = (config) => {
    const [data,dataSet]=useState();
    const [isLoading,isLoadingSet]= useState(true);
    
    const fetchData = async () => {
        console.log(config);
        try{
            isLoadingSet(true);
            axios.defaults.headers.common['x-hasura-admin-secret'] = 'xMIUjvyGbGF9Pgwp3LJ4UYuvebON55OsekCN2HkPaBx7RrSXMEmZ240YGwQttjLZ';
            const {data: dataFromAPI} = await axios ({
                baseURL: 'https://pure-beagle-94.hasura.app/api/rest/',
                url: `${config?.path}`,
                method: config?.method || 'get',
                headers: {
                    'x-hasura-admin-secret': 'xMIUjvyGbGF9Pgwp3LJ4UYuvebON55OsekCN2HkPaBx7RrSXMEmZ240YGwQttjLZ'
                }
            });
            dataSet(dataFromAPI);
            isLoadingSet(false);
        } catch(error){
            console.log(error);
        }
    }
    const setLoading = (val) => isLoadingSet(val);

    useEffect(() => {
        fetchData();
    },[])
    return {data,isLoading,setLoading};
}
