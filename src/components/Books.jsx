import Book from "./Book";

const Books = () => {
    return (
        <div className="mt-[100px] mb-[36px]">
            <div className="text-center playfair-display">
                <h1 className="text-[#131313] font-bold text-[40px]">Books</h1>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-6 container mx-auto">
            <Book></Book>
            <Book></Book>
            <Book></Book>
            </div>
            
        </div>
    );
};

export default Books;