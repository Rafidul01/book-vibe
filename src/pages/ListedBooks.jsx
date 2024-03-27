import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const ListedBooks = () => {
    const [tabIdx, setTabIdx] = useState(0);
  return (
    <div>
      <div className="text-[#131313] font-bold h-[100px] text-center bg-[#1313130D] rounded-[16px] flex items-center justify-center work-sans text-[28px]">
        <h1>Books</h1>
      </div>
      <div className="flex items-center justify-center mt-8 mb-[56px]">
        <select className="select select-bordered w-full max-w-[185px] bg-[#23BE0A] text-[#FFFFFF] rounded-2xl font-semibold text-base work-sans">
          <option disabled selected>
            Sort By
          </option>
          <option>Rating</option>
          <option>Number of pages</option>
          <option>Publisher year</option>
        </select>
      </div>
      <div>
        {/* <div role="tablist" className="tabs tabs-lifted">
        
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab text-[#131313CC] font-normal text-base"
            aria-label="Read Books"
          />
         
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <ReadBook></ReadBook>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab text-[#131313CC] font-normal text-base"
            aria-label="Wishlist Books"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 2
          </div>

          
        </div> */}
        <div role="tablist" className="tabs tabs-lifted flex justify-start mb-4">
          <Link onClick={()=>setTabIdx(0)}  role="tab" to={`readBooks`} className= {`tab font-normal text-base ${tabIdx === 0 ? 'tab-active text-[#131313CC]' : 'text-[#13131380]'} `} >
          Read Books
          </Link>
          <Link onClick={()=>setTabIdx(1)}  role="tab" to={`wishlistBooks`} className= {`tab font-normal text-base w-[90] ${tabIdx === 1 ? 'tab-active text-[#131313CC]' : 'text-[#13131380]'} `} >
          Wishlist Books
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ListedBooks;
