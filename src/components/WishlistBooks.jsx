/* eslint-disable react/prop-types */
import WantedBooks from "./WantedBooks";
import { useEffect, useState } from "react";
import { getStoredWishBooks } from "../utilitiy/localstrorage";

const WishlistBooks = ({books, srt}) => {
    // console.log("forom wishlist : ",srt)
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
            if(srt === 0) readdedBooks.sort((a,b) => b.rating-a.rating);
            else if(srt === 1){
                readdedBooks.sort((a,b) => b.totalPages-a.totalPages);
            }
            else if(srt === 2){
                readdedBooks.sort((a,b) => b.yearOfPublishing-a.yearOfPublishing);
            }
            
            setWishBook(readdedBooks);
            // console.log(wishBook);
            
        }
    },[srt])
    return (
        <div className="space-y-4">
            {
                wishBook.map(book => <WantedBooks key={book.id} book={book} ></WantedBooks>)
            }
            
        </div>
    );
};

export default WishlistBooks;