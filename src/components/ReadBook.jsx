import { useLoaderData } from "react-router-dom";
import WantedBooks from "./WantedBooks";
import { useEffect, useState } from "react";
import { getStoredReadBooks } from "../utilitiy/localstrorage";

const ReadBook = () => {
    // const sortvalue = getStoredSortData(); 
    const books = useLoaderData();
    const [readBook, setReadBook] = useState([])
    useEffect(()=>{
        const storedBookId = getStoredReadBooks();
        if(books.length > 0){
            const readdedBooks = [];
            for(const id of storedBookId){
                const book = books.find(book => book.id === id );
                if(book){
                    readdedBooks.push(book);
                }

            }
            setReadBook(readdedBooks);
            
        }
    }, [])
    // useEffect(()=>{
    //     const finalData = [...readBook];
    //     console.log(finalData);
    // }, [sortvalue.length])
    return (
        <div className="space-y-4">
            {
                readBook.map(book => <WantedBooks key={book.id} book={book} ></WantedBooks>)
            }
            
        </div>
    );
};

export default ReadBook;