/* eslint-disable react/prop-types */

import WantedBooks from "./WantedBooks";
import { useEffect, useState } from "react";
import { getStoredReadBooks } from "../utilitiy/localstrorage";

const ReadBook = ({books, srt}) => {
    // const sortvalue = getStoredSortData(); 
    // console.log(srt , books);    
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
            if(srt === 0) readdedBooks.sort((a,b) => b.rating-a.rating);
            else if(srt === 1){
                readdedBooks.sort((a,b) => b.totalPages-a.totalPages);
            }
            else if(srt === 2){
                readdedBooks.sort((a,b) => b.yearOfPublishing-a.yearOfPublishing);
            }
            setReadBook(readdedBooks);
            // console.log(readBook);
            
        }
    }, [srt])
    
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