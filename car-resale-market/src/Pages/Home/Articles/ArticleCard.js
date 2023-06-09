import React from "react";

const ArticleCard = ({ datas }) => {
  const { name, description, img } = datas;
  return (
    <div className="card w-96 bg-base-100 hover:scale-105 duration-500 py-2 rounded-lg card-compact ">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default ArticleCard;
