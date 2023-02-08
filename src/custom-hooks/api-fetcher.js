import axios from "axios";
import { useState } from "react";

export const FetchApi = (config) => {
    const [data,dataSet]=useState();
    const [isLoading,isLoadingSet]= useState(true);
    
    const fetchData = async () => {
        try{
            isLoadingSet(true);
            const {data: dataFromAPI} = await axios ({
                baseURL: '',
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
    // const setLoading = (val) => isLoadingSet(val);
    return {data,isLoading};
}
