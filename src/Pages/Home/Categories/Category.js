import React from "react";

const Category = ({ service }) => {
  const { name, image, id } = service;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl mt-10">
      <figure >
        <img className=" h-72 object-cover " src={image} alt="category" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
       
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View More</button>
        </div> 
      </div>
    </div>
  );
};

export default Category;
