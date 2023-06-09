import React from 'react';

const ChooseUsSingleData = ({chooseData}) => {
    const {name, description, img} = chooseData;
    return (
        <div className="card  bg-base-100 mt-8 hover:scale-105 duration-500 py-2 rounded-lg">
        <figure className="px-10 pt-10 ">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className='text-lg'>{description}</p>       
        </div>
      </div>
    );
};

export default ChooseUsSingleData;