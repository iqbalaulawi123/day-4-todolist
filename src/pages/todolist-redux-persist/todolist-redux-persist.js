import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import TaskList from "../../component/TaskList/tasklist";
// harus make { } liat cara exportnya di reducer-task
import {deleteTaskList, submitTaskList, checkTaskList} from "../../store/reducer-task"; 


export default function TodolistReduxPersist(){
    const [formtask,formtaskSet] = useState('');
    // const [todolist,todolistSet] = useState([]);
    // const [formdata,formdataSet] = useState([]);
    
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
                Todolist
            </div>
            <h5 className="text-muted mb-3">Dengan menggunakan Redux Persist</h5>
            <div className="card mx-auto my-auto bg-white shadow-sm rounded my-2">
                {/* <div className="card-header p-3 bg-white">
                    <h4 className="fw-bold">To-do list</h4>
                </div> */}
                <div className="card-body" >
                    <div className="task-contain d-grid gap-2">
                        <div className="card bg-primary shadow-sm p-3 rounded">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Tambah to-do list kamu" value={formtask} onChange={(e)=>formtaskSet(e.target.value)} />
                                <button className="btn btn-light text-primary fw-bold shadow " type="button" onClick={tambahHandler}>
                                    <span className="mx-2">+</span>Add
                                </button>
                            </div>
                        </div>
                        <div className="task-list-contain d-grid gap-2" style={{maxHeight:"50vh",overflowY:"auto"}}>
                            {dataTasks.length > 0 && dataTasks.map((todolist, i) => (
                                <TaskList
                                key={todolist.id}
                                id={todolist.id}
                                className={(dataTasks.completed === true ? 'task-done' : '')}
                                title={todolist.title}
                                completed={todolist.completed}
                                checkListHandler = {checkListHandler}
                                deleteTaskHandler = {deleteTaskHandler}
                                >
                                </TaskList>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}