import Navbar from "../component/Navbar/navbar";
import Content from "./content";
import Footer from "./footer";

export default function Index(){
    return (
        <>
        <Navbar/>
        <div className="content-wrapper d-flex" style={{minHeight: "85vh"}}>
            <Content/>
        </div>
        <Footer/>
        </>
    )
}