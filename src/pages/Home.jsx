import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Books from "../components/Books";

const Home = () => {
    const books =  useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Books books={books}></Books>
        </div>
    );
};

export default Home;