import { useLoaderData } from "react-router-dom";
import OnlineBook from "../components/OnlineBook"
const OnlineBooks = () => {
    const data = useLoaderData();
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">
            {
                data.map((d,i)=> <OnlineBook key={i} d={d}></OnlineBook>)
            }
        </div>
    );
};

export default OnlineBooks;