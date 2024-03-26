import Ster from "../assets/image/Frame.svg"
const Book = () => {
  return (
    <div className="card md:w-96 bg-base-100 shadow-xl">
      
        <figure className="px-6 pt-6 ">
        <div className="h-[230px] w-[310px] md:w-[326px] bg-[#F3F3F3] rounded-2xl">
          <img
            src="https://i.ibb.co/h1s1DBc/B1-removebg-preview.png"
            alt="Shoes"
            className="rounded-xl object-contain h-full w-full"
          />
          </div>
        </figure>
      {/* tags */}
      <div className="flex p-6">
        <p className=" px-4 py-2 text-[#23BE0A] font-medium text-base work-sans bg-[#23BE0A0D] rounded-[30px] ">Young Adult</p>
        <p className=" px-4 py-2 text-[#23BE0A] font-medium text-base work-sans bg-[#23BE0A0D] rounded-[30px] ">Identity</p>
      </div>
      <div className="px-6 pb-6 space-y-4">
        <h2 className="card-title text-[#131313] playfair-display font-bold text-2xl">The Catcher in the Rye</h2>
        <p className="work-sans text-[#131313CC] font-medium">By: author </p>
        <hr className="border-dashed border-[#13131326]" />
        <div className="flex items-center justify-between">
          <p className="work-sans text-[#131313CC] font-medium">Fiction</p>
          <div className="flex justify-center items-center work-sans text-[#131313CC] font-medium">
          <p>5.00 </p>
          <img src={Ster} alt="" />
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Book;
