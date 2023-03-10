
export default function TaskList({id,className,title,completed,checkListHandler,deleteTaskHandler}){
    return (
            <div key={id} className={"card  shadow-sm p-3 my-2 rounded "+(completed === true ? "alert alert-secondary" : "bg-white")}>
                <div className="form-check d-flex row">
                    <div className="col-md-10 my-auto">
                        <input className={"form-check-input"} checked={completed === true? true : false} type="checkbox" value="" id="checkbox" onChange={()=>checkListHandler(id)}/>
                        <label className={"form-check-label "+(completed === true ? "task-done" : "")} htmlFor="checkbox">
                        {title}
                        </label>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-light text-danger  fw-bold shadow float-end" type="button" onClick={()=>deleteTaskHandler(id)} ><i className="bi bi-dash-lg h4 fw-bold"></i></button>
                    </div>
                </div>
            </div>

    )
}