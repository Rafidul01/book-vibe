import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-[554px] bg-base-200 rounded-3xl ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src="https://i.ibb.co/h1s1DBc/B1-removebg-preview.png"
          className=" max-w-full md:max-w-sm rounded-lg "
        />
        <div className="space-y-8 text-center md:text-start">
          <h1 className=" text-3xl md:text-[56px] font-bold playfair-display max-w-[526px] leading-normal text-[#131313] ">Books to freshen up your bookshelf</h1>
          <Link to="/listedBooks"><button className="btn bg-[#23BE0A] mt-8 text-white font-bold text-xl w-48 h-16 ">View The List</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
