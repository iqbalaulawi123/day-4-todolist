import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Index from "../../layout";
import { FetchApi } from "../../custom-hooks/api-fetcher";
import {deleteTaskList, submitTaskList, checkTaskList} from "../../store/reducer-task"; 
import { useDispatch, useSelector } from "react-redux";
import TaskList from "../../component/TaskList/tasklist";

export default function TestApi(){

    const [formtask,formtaskSet] = useState('');

    const {data: dataTasks} = useSelector(state=>state.tasks);
    //buat manipulasi data -> ke Reducer
    const dispatch = useDispatch();

    const tambahHandler = (e) => {
        e.preventDefault()
        const id = dataTasks.length + 1;
        dispatch(submitTaskList({id: id,title: formtask,completed: false}))
        formtaskSet("")
	}
    const checkListHandler = (id) => {
        console.log("checklist id :"+id)
        dispatch(checkTaskList(id))
    }
    const deleteTaskHandler = (id) => {
        console.log("deleting id :"+id)
        dispatch(deleteTaskList(id))
    }

    // ini buat akses detail /:id
    // const params = useParams(); <- buat ngambil dari url misal user/11
    // const {data, isLoading} = FetchApi({path:`users/${params.id}`, method:'get'});
    
    const [dataApi,dataApiSet] = useState();
    // const {data, isLoading} = FetchApi({path:`users/`, method:'get'});
    useEffect(()=>{
		axios.defaults.headers.common['x-hasura-admin-secret'] = 'xMIUjvyGbGF9Pgwp3LJ4UYuvebON55OsekCN2HkPaBx7RrSXMEmZ240YGwQttjLZ';
        axios.get('https://pure-beagle-94.hasura.app/api/rest/todolist')
		.then(res => {
            const result_api = res.data.todolist_app;
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
                    {dataApi && dataApi.result_api.map((data, i) => (
                        <TaskList
                        key={i}
                        id={data.id}
                        className={(data.completed === true ? 'task-done' : '')}
                        title={data.title}
                        completed={data.completed}
                        checkListHandler = {checkListHandler}
                        deleteTaskHandler = {deleteTaskHandler}
                        >
                        </TaskList>
                    ))}
                    <ul>
                    </ul>
                </div>
            </div>
        </>
    )
}