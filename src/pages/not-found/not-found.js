import { NavLink } from "react-router-dom";

export default function NotFound(){
    return (
        <>
            <div className="title-page mb-3 mt-3 fw-bold">
                Page Not Found (404)
            </div>
            <div className="card mx-auto my-auto bg-white shadow-sm rounded my-2">
                <div className="card-body">
                    Page yang anda tuju tidak ditemukan
                    <br/>
                    <NavLink to="/Home" >
                        Kembali
                    </NavLink>
                </div>
            </div>
        </>
    )
}