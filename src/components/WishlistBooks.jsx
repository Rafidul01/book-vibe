import { useLoaderData } from "react-router-dom";
import WantedBooks from "./WantedBooks";
import { useEffect, useState } from "react";
import { getStoredWishBooks } from "../utilitiy/localstrorage";

const WishlistBooks = () => {
    const books = useLoaderData();
    const [wishBook, setWishBook] = useState([])
    useEffect(()=>{
        const storedBookId = getStoredWishBooks();
        if(books.length > 0){
            const readdedBooks = [];
            for(const id of storedBookId){
                const book = books.find(book => book.id === id );
                if(book){
                    readdedBooks.push(book);
                }

            }
            setWishBook(readdedBooks);
            
        }
    },[])
    return (
        <div className="space-y-4">
            {
                wishBook.map(book => <WantedBooks key={book.id} book={book} ></WantedBooks>)
            }
            
        </div>
    );
};

export default WishlistBooks;