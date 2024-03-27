import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;