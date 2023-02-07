import { NavLink } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container-fluid">
                <NavLink to="/home" className="navbar-brand">
                    alterra-app
                </NavLink>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink to="/" className={({isActive})=>isActive ? "nav-link active":"nav-link"}>
                        Home
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/about" className={({isActive})=>isActive ? "nav-link active":"nav-link"}>
                        About
                    </NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink to="/todolist" className={({isActive})=>isActive ? "nav-link active":"nav-link"}>
                        Todolist (day 4-5)
                    </NavLink>
                    </li>
                    
                    <li className="nav-item">
                    <NavLink to="/form-daftar" className={({isActive})=>isActive ? "nav-link active":"nav-link"}>
                        Form Daftar
                    </NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}