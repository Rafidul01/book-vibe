import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const books = useLoaderData();
  const book = books.find((book) => book.id === idInt);
  const {Name, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
  console.log(book);
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl ">
        <figure className="md:w-1/2">
          <img
            src={image}
            alt="Album"
            className="bg-[#1313130D] lg:w-full md:h-[564px] rounded-2xl object-contain"
          />
        </figure>
        <div className="p-8 lg:w-1/2  space-y-4">
          <h2 className="card-title playfair-display font-bold text-xl md:text-[40px] leading-10">{Name}</h2>
          <p className="text-[#131313CC] font-medium text-xl work-sans">By : {author}</p>
          <hr />
          <h1 className="text-[#131313CC] font-medium text-xl work-sans">{category}</h1>
          <hr />
          <p className="text-[#131313CC] font-medium text-base work-sans"><span className="text-[#131313]">Review : </span>{review}</p>
          <div className="flex items-center gap-4">
            <h1 className="text-[#131313] font-medium text-xl work-sans">Tag </h1>
           {
            tags.map((tag,idx)=> <p key={idx} className=" px-4 py-2 text-[#23BE0A] font-medium text-base work-sans bg-[#23BE0A0D] rounded-[30px]  ">
            #{tag}
          </p> )
          }
          </div>
          <hr />
          <table className="text-[#131313CC] font-normal text-xl work-sans">
          <tr>
            <td className="pr-16">Number of Pages:</td>
            <td className="font-semibold">{totalPages}</td>
          </tr>
          <tr>
            <td className="">Publisher:</td>
            <td className="font-semibold">{publisher}</td>
          </tr>
          <tr>
            <td className="">Year of Publishing:</td>
            <td className="font-semibold">{yearOfPublishing}</td>
          </tr>
          <tr>
            <td className="pr-4">Rating:</td>
            <td className="font-semibold">{rating}</td>
          </tr>

          </table>
          
          <div className="card-actions">
            <button className="btn bg-transparent border text-[#131313] work-sans">Read</button>
            <button className="btn bg-[#50B1C9] text-white work-sans">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
