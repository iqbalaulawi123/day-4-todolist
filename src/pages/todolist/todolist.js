import { useState } from "react"

import TaskList from "../../component/TaskList/tasklist";


export default function Todolist(){
    const [formtask,formtaskSet] = useState('');
    const [todolist,todolistSet] = useState([]);
    // const [formdata,formdataSet] = useState([]);

    const tambahHandler = (e) => {
        e.preventDefault()
        const id = todolist.length + 1;
        if(formtask !== ""){
            todolistSet (prev=>[
                {
                id: id,
                title: formtask,
                completed: false,
                },
                ...prev
            ])
        }else{
            alert("Input to-do list tidak boleh kosong")
        }
        formtaskSet("")
	}

    const checkListHandler = (id) => {
        console.log("checklist id :"+id)
        todolistSet(prev => {
            return prev.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        });
    }

    const deleteTaskHandler = (id) => {
        console.log("deleting id :"+id)
        todolistSet (prev=>{
            let contain = [...prev];
            let filtered = contain.filter(data => data.id !== id);
            return filtered;
        })
    }
    

    return (
        <>
            <div className="title-page mb-3 mt-3 fw-bold">
                Todolist
            </div>
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
                            {todolist.length > 0 && todolist.map((todolist, i) => (
                                <TaskList
                                key={i}
                                id={todolist.id}
                                className={(todolist.completed === true ? 'task-done' : '')}
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