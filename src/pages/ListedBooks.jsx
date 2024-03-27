import { Link,  useLoaderData } from "react-router-dom";
import { useState } from "react";
import {  saveShortData } from "../utilitiy/localstrorage";
import ReadBook from "../components/ReadBook";
import WishlistBooks from "../components/WishlistBooks";

const ListedBooks = () => {
  const books = useLoaderData();

  const [srt , setSrt] = useState(0);
    const [tabIdx, setTabIdx] = useState(0);
    saveShortData('Rating');
    const handelChange = (e) =>{
      saveShortData(e.target.value);
      if(e.target.value === "Rating"){
        setSrt (0);
      }
      else if(e.target.value === "Number of pages"){
        setSrt (1);
      }
      else if(e.target.value === "Publisher year"){
        setSrt (2);
      }
      
      // console.log(books);
    } 
    // useEffect(()=> {
    //   if(!srt){
    //     data.sort((a,b) => b.rating-a.rating);
    //   setBooks([...data]);
    //   }
    //   else{
    //     data.sort((a,b) => b.rating-a.rating);
    //     setBooks([...data]);
    //   }
      
    // },[srt,data])
    
  return (
    <div>
      <div className="text-[#131313] font-bold h-[100px] text-center bg-[#1313130D] rounded-[16px] flex items-center justify-center work-sans text-[28px]">
        <h1>Books</h1>
      </div>
      <div className="flex items-center justify-center mt-8 mb-[56px]">
        <select onChange={handelChange} className="select select-bordered w-full max-w-[200px] bg-[#23BE0A] text-[#FFFFFF] rounded-2xl font-semibold text-base work-sans">
          <option disabled selected>
          Sort By
          </option>
          <option>Rating</option>
          <option>Number of pages</option>
          <option>Publisher year</option>
        </select>
      </div>
      <div>
        <div role="tablist" className="tabs tabs-lifted flex justify-start mb-4">
          <Link onClick={()=>setTabIdx(0)}  role="tab"  className= {`tab font-normal text-base ${tabIdx === 0 ? 'tab-active text-[#131313CC]' : 'text-[#13131380]'} `} >
          Read Books
          </Link>
          <Link onClick={()=>setTabIdx(1)}  role="tab"  className= {`tab font-normal text-base w-[90] ${tabIdx === 1 ? 'tab-active text-[#131313CC]' : 'text-[#13131380]'} `} >
          Wishlist Books
          </Link>
        </div>
        {
          tabIdx === 0 && <ReadBook books={books} srt={srt} ></ReadBook>
        }
        {
          tabIdx === 1 && <WishlistBooks books={books} srt={srt} ></WishlistBooks>
        }
        
      </div>
    </div>
  );
};

export default ListedBooks;
