import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import Navbar from "../pages/navbar/Navbar";


const Root = () => {
    return (
        <div>
           <div className="container mx-auto">
           <Navbar></Navbar>
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;