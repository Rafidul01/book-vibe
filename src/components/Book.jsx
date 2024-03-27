/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Ster from "../assets/image/Frame.svg";
const Book = ({ book }) => {
    const {id, Name, author, image,rating, category, tags} = book;
  return (
    <Link to={`/book/${id}`} className="" >
      <div className="card md:w-96 bg-base-100 shadow-xl mx-auto h-full border ">
        <figure className="px-6 pt-6 ">
          <div className="h-[230px] w-[310px] md:w-[326px] bg-[#F3F3F3] rounded-2xl">
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl object-contain h-full w-full"
            />
          </div>
        </figure>
        {/* tags */}
        <div className="flex p-6 gap-3">
            {
                tags.map((tag,idx) => <p key={idx} className=" px-4 py-2 text-[#23BE0A] font-medium text-base work-sans bg-[#23BE0A0D] rounded-[30px] ">
                {tag}
              </p> )
            }
          
        </div>
        <div className="px-6 pb-6 space-y-4">
          <h2 className="card-title text-[#131313] playfair-display font-bold text-2xl">
            {Name}
          </h2>
          <p className="work-sans text-[#131313CC] font-medium">By: {author} </p>
          <hr className="border-dashed border-[#13131326]" />
          <div className="flex items-center justify-between">
            <p className="work-sans text-[#131313CC] font-medium">{category}</p>
            <div className="flex justify-center items-center gap-2  work-sans text-[#131313CC] font-medium">
              <p>{rating} </p>
              <img src={Ster} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
