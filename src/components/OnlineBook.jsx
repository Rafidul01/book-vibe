/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const OnlineBook = ({ d }) => {
  const { image, Name, review } = d;
  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl mt-4">
      <figure className="px-6 pt-6">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl h-[300px]"
        />
      </figure>
      <div className="card-body items-center text-center justify-end">
        <h2 className="card-title">{Name}</h2>
        <p>{review}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Read Now</button>
        </div>
      </div>
    </div>
  );
};

export default OnlineBook;
