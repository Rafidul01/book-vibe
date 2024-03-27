/* eslint-disable react/prop-types */
import Book from "./Book";

const Books = ({books}) => {
    return (
        <div className="mt-[100px] mb-[50px]">
            <div className="text-center playfair-display">
                <h1 className="text-[#131313] font-bold text-[40px]">Books</h1>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6  justify-between mt-[36px]  ">
            
                {
                    books.map(book => <Book key={book.id} book={book} > </Book> )
                }
                
            </div>
            
        </div>
    );
};

export default Books;