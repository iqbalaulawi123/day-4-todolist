import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FetchApi } from "../../custom-hooks/api-fetcher";

export default function TestApiDetail(){
    // ini buat akses detail /:id
    // const params = useParams();
    // const {data, isLoading} = FetchApi({path:`users/${params.id}`, method:'get'});
    const [dataApi,dataApiSet] = useState();
    const params = useParams();
    const {data, isLoading} = FetchApi({path:`users/${params.id}`, method:'get'});
    useEffect(()=>{
		axios.get(`https://reqres.in/api/users`)
		.then(res => {
            const persons = res.data;
            dataApiSet({ persons });
        })
	})
    return (
        <>
            <div className="title-page mb-3 mt-3 fw-bold">
                Test APi
            </div>
            <div className="card mx-auto my-auto bg-white shadow-sm rounded my-2">
                <div className="card-body">
                    
                </div>
            </div>
        </>
    )
}