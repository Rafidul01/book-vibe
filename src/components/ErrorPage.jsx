import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] space-y-4 ">
            <h1 className="text-red-950 font-extrabold text-5xl">Error page not found!</h1>
            <h1 className="text-black font-extrabold text-3xl opacity-80">go back to home!</h1>
            <Link to={'/'}><button className="btn btn-primary">HOME</button></Link>
        </div>
    );
};

export default ErrorPage;