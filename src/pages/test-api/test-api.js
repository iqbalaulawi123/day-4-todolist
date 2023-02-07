import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Index from "../../layout";
// import { FetchApi } from "../../custom-hooks/api-fetcher";

export default function TestApi(){
    // ini buat akses detail /:id
    // const params = useParams(); <- buat ngambil dari url misal user/11
    // const {data, isLoading} = FetchApi({path:`users/${params.id}`, method:'get'});
    
    const [dataApi,dataApiSet] = useState();
    // const {data, isLoading} = FetchApi({path:`users/`, method:'get'});
    useEffect(()=>{
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(res => {
            const result_api = res;
            dataApiSet({ result_api });
        })
	},[]);
    return (
        <>
            <div className="title-page mb-3 mt-3 fw-bold">
                Test APi
            </div>
            <div className="card mx-auto my-auto bg-white shadow-sm rounded my-2">
                <div className="card-body">
                    test data api :
                    <p>Mentah</p>
                    {JSON.stringify(dataApi)}
                    <p>Jadi :</p>
                    <ul>
                    </ul>
                </div>
            </div>
        </>
    )
}