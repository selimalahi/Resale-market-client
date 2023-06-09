import React from "react";
import { BsSpeedometer} from 'react-icons/bs';
import { TbEngine } from 'react-icons/tb';
// import {BsFillFuelPumpFill } from 'react-icons/bs';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import imgg from '../../../assets/upcomming/1938382-200.png';
import imgg2 from '../../../assets/upcomming/gear-shift.png';
import { Link } from "react-router-dom";




const UpcommingCard = ({ carddata }) => {

  const {
    id,
    name,
    condition,
    img,
    type,
    sale,
    meterinfo1,
    meterinfo2,
    meterinfo3,
    meterinfo4,
    conpany,
    post,
    description,
    details,
    feature
  } = carddata;

  console.log(carddata);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100   shadow-md hover:scale-105 duration-500 py-2  ">
      <p className="badge badge-secondary">{condition}</p>
        <figure>         
          <img
            className="h-48"
            src={img}
            alt="Shoes"/>  

        </figure>
        <div className="card-body ml-4 ">
          <h2 className="card-title font-bold text-2xl">{name}</h2>
          <h2 className="text-[15px]">{type}</h2>
          <h4 className="text-xl text-[#837f49]">{sale}</h4>
          <hr/>
          <div className="flex flex-1 gap-12 mt-6 mb-4">
          <div>
          <BsSpeedometer  className="w-8 h-8" />
          <p>{meterinfo1}</p>
          </div>
          <div>
          <TbEngine className="w-8 h-8"/>
          <p> {meterinfo2}</p>
          </div>
          <div>
          {/* <BsFillFuelPumpFill /> */}
          <img src={imgg} alt="" className="w-8 h-8" />
          <p>{meterinfo3}</p>
          </div>
          <div>
          <img src={imgg2} alt="" className="w-8 h-8" />
          <p>{meterinfo4}</p>
          </div>          
          </div>
          <hr />
          <div className="flex my-3 ">
            <p className=" text-[#837f49] bold">{conpany}</p>
            <p className=" text-[#837f49] bold"> {post}</p>
            {/* <p>{details}</p> */}
          </div>
          <div className="card-actions justify-end">
          <Link
                  to={{
                 pathname: `/carddetails/${id}`,
                     }}
               state={{carddata}}                  
          >
              <button className="btn btn-primary">
              Details
              </button></Link>
          
          </div>
        </div>
      </div>    
       
              
    </div>
  );
};

export default UpcommingCard;
