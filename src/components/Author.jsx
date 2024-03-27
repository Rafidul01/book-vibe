/* eslint-disable react/prop-types */

const Author = ({d}) => {
    const {author, authorImage} = d;
    return (
        <div className="card lg:w-96  bg-base-100 shadow-xl image-full mt-4">
  <figure><img src={authorImage} /></figure>
  <div className="card-body justify-end">
    <h2 className="card-title">Name: {author}</h2>
    
    
  </div>
</div>
    );
};

export default Author;