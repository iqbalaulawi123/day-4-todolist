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
    
    //cara custom hook - get data todolist
    const {data, isLoading} = FetchApi({path:`todolist`, method:'get'});
    return (
        <>
            <div className="title-page mb-3 mt-3 fw-bold">
                Test APi
            </div>
            <div className="card mx-auto my-auto bg-white shadow-sm rounded my-2">
                <div className="card-body">
                    <div className="card bg-primary shadow-sm p-3 rounded">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Tambah to-do list kamu" value={formtask} onChange={(e)=>formtaskSet(e.target.value)} />
                            <button className="btn btn-light text-primary fw-bold shadow " type="button" onClick={tambahHandler}>
                                <span className="mx-2">+</span>Add
                            </button>
                        </div>
                    </div>
                    {!isLoading ?
                        data?.todolist_app.map((todolist, i) => (
                            <>
                                <TaskList
                                key={todolist.id}
                                id={todolist.id}
                                className="my-1"
                                title={todolist.title}
                                completed={todolist.completed}
                                checkListHandler = {checkListHandler}
                                deleteTaskHandler = {deleteTaskHandler}
                                >
                                </TaskList>
                            </>
                        ))
                        :
                        <button className="btn btn-light my-3" type="button" disabled>
                            <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
                            <span>Memuat Data...</span>
                        </button>
                    }
                </div>
            </div>
        </>
    )
}