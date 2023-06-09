import React from "react";
import { useLocation } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa';

const UpcommingCardDetails = () => {
  const location = useLocation();
  const { carddata } = location?.state;

  // console.log("details page data line 08:", carddata);
  const { img, type, sale, name, description } = carddata;

  // Access the data and render the details

  return (
    <div className="card  bg-base-100 shadow-xl">
    <figure><img className="transition-transform duration-300 hover:scale-125" src={img} alt="Shoes" /></figure>
    <div className="card-body">
       <div className="flex ">
       <h2 className="card-title font-bold  italic hover:not-italic ml-10 text-sm sm:text-xl   xl:text-4xl">{name}</h2>
       <p className="text-right font-bold  text-[#837f49] italic hover:not-italic  text-sm sm:text-xl  xl:text-4xl " >{sale}</p>
       </div>
      <p className="ml-10 text-sm sm:text-xl xl:text-xl italic hover:not-italic ">{type}</p>
      <div className='mt-6'>
        <h1 className="ml-10 text-lg italic  ">{description}</h1>
      </div>
      <h1 className="ml-10 text-4xl italic mt-10 mb-5 font-bold">DETAILS</h1>
      <hr />
      <div className=" ml-10 grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-8 mb-10">
        <p>Car ID : <span className="font-bold">{carddata.details?.carid}</span></p>
        <p>Maker  : <span className="font-bold"> {carddata.details?.Maker}</span></p>
        <p>Model  : <span className="font-bold">{carddata.details?.model}</span></p>
        <p>Transmission : <span className="font-bold">{carddata.details?.Transmission}</span></p>
        <p>Type of drive: <span className="font-bold">{carddata.details?.Typeofdrive}</span></p>
        <p>Fuel: <span className="font-bold">{carddata.details?.driveFuel}</span></p>
        <p>Engine: <span className="font-bold">{carddata.details?.Engine}</span></p>
        <p>Engine Power: <span className="font-bold">{carddata.details?.power}</span></p>
        <p>Engine power: <span className="font-bold">{carddata.details?.horsesEnginepower}</span></p>        
      </div>
      <h1 className="ml-10 text-4xl font-bold mt-8 mb-8 italic">FEATURES</h1> 
      <hr />
      <div className=" ml-10 grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-8 mb-10 text-[#837f49] ">
        <p>{carddata.feature?.feature1}</p>
        <p>{carddata.feature?.feature2}</p>
        <p>{carddata.feature?.feature3}</p>
        <p>{carddata.feature?.feature4}</p>
        <p>{carddata.feature?.feature5}</p>
      
      </div>
      
      <div className="card-actions justify-end">
        <button className="btn btn-primary disabled:opacity-50 disabled:pointer-events-none"  disabled >Book Now</button>
      </div>
    </div>
  </div>
  );
};

export default UpcommingCardDetails;
