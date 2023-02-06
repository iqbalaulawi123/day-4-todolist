import Navbar from "../component/Navbar";


export default function Index({children}){
    return (
        <>
        <section id="main-section" style={{width:"100%",minHeight:"100vh"}} className="bg-light">
                <Navbar></Navbar>
                <div className="content-wrapper p-md-5 p-3">
                    {children}
                </div>
        </section>
        </>
    )
}