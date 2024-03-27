import { useLoaderData } from "react-router-dom";
import Author from "../components/Author";
const Authors = () => {
    const data = useLoaderData();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 g-8 p-4 ">
        {
            data.map((d,i )=> <Author key={i} d={d}></Author>)
        }
    </div>
  );
};

export default Authors;
