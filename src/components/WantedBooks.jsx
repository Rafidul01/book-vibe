import { CiLocationOn } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
const WantedBooks = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border">
      <figure className="p-6">
        <img
          src="https://i.ibb.co/6WmTmN4/b2-removebg-preview.png"
          alt="Album"
          className="rounded-2xl lg:w-[230px] lg:h[172px] bg-[#1313130D] "
        />
      </figure>
      <div className="p-6 space-y-4 w-auto">
        <h2 className="card-title playfair-display font-bold text-2xl text-[#131313]">
          New album is released!
        </h2>
        <p className="text-[#131313CC] work-sans font-medium text-base">
          By :{" "}
        </p>
        <div className="flex items-center gap-4">
          <h1 className="text-[#131313] font-medium text-xl work-sans ">
            Tag{" "}
          </h1>
          <div className=" font-medium text-xl work-sans flex items-center gap-2">
            <CiLocationOn className="text-[#131313CC]" />
            <h1 className="text-[#131313CC]">Year of Publishing: 1924</h1>
          </div>
        </div>
        <div className="flex gap-4">
          <div className=" font-medium text-xl work-sans flex items-center gap-2 ">
            <IoPeopleSharp className="text-[#13131399]" />
            <h1 className="text-[#13131399]">Publisher: Scribner</h1>
          </div>
          <div className=" font-medium text-xl work-sans flex items-center gap-2">
            <IoNewspaperOutline className="text-[#13131399]" />
            <h1 className="text-[#13131399]">Page 192</h1>
          </div>
        </div>
        <hr />
        <div className="flex flex-col lg:flex-row gap-4">
          <button className="btn bg-[##328EFF26] text-[#328EFF] rounded-[30px]">Category: Classic</button>
          <button className="btn bg-[#FFAC3326] text-[#FFAC33] rounded-[30px]">Rating: 4.5</button>
          <button className="btn bg-[#23BE0A] text-white rounded-[30px]">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default WantedBooks;
