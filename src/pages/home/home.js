import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import TaskList from "../../component/TaskList/tasklist";
// harus make { } liat cara exportnya di reducer-task
import {deleteTaskList, submitTaskList, checkTaskList} from "../../store/reducer-task"; 

export default function Home(){
    const [formtask,formtaskSet] = useState('');
    // dataTasks yg dilempar ke fungsi map
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
    return (
        <>
            <div className="title-page mb-3 mt-3 fw-bold">
                Home
            </div>
            <div className="card mx-auto my-auto bg-white shadow-sm rounded my-2">
                <div className="card-body">
                Selamat Datang.
                Berikut ini adalah daftar task kamu :
                (Redux-Persist)
                </div>
                <div className="card border-0">
                    <div className="card-body">
                    {dataTasks.length > 0 && dataTasks.map((todolist, i) => (
                        <>
                        <div className="card my-1">
                            <div className="card-body">
                                {todolist.title}
                            </div>
                        </div>
                        </>
                    ))}
                    </div>
                </div>
                
            </div>
        </>
    )
}