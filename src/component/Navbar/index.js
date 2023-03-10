import { NavLink } from "react-router-dom";
import TodolistRedux from "../../pages/todolist-redux/todolist-redux";

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container-fluid">
                <NavLink to="/home" className="navbar-brand fw-bold">
                    alterra-app
                </NavLink>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink to="/" className={({isActive})=>isActive ? "nav-link text-primary fw-bold":"nav-link"}>
                        Home
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/about" className={({isActive})=>isActive ? "nav-link text-primary fw-bold":"nav-link"}>
                        About
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/todolist" className={({isActive})=>isActive ? "nav-link text-primary fw-bold":"nav-link"}>
                        Todolist (day 4-5)
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/form-daftar" className={({isActive})=>isActive ? "nav-link text-primary fw-bold":"nav-link"}>
                        Form-Daftar (day 5)
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/todolist-redux" className={({isActive})=>isActive ? "nav-link text-primary fw-bold":"nav-link"}>
                        Todolist-redux (day 6-7)
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/todolist-redux-persist" className={({isActive})=>isActive ? "nav-link text-primary fw-bold":"nav-link"}>
                        Todolist-redux-persist (day 6-7)
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/test-api" className={({isActive})=>isActive ? "nav-link text-primary fw-bold":"nav-link"}>
                        Data Fetching (day 7)
                    </NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}