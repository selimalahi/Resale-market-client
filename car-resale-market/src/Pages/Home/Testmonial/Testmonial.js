import React from "react";
import testmonialimg1 from'../../../assets/image/banner/test1.jpg';
import testmonialimg2 from'../../../assets/image/banner/test-2.jpg';
import testmonialimg from'../../../assets/image/banner/test-3.jpg';

const Testmonial = () => {

  const TestmonialData = [
    {
      id: 1,
      img: testmonialimg1,
      name:'jony Dyl',
      des: "You’re really good at obtaining first-hand customer information and using this information to improve our products and services. "

    },
    {
      id: 2,
      img: testmonialimg2,
      name:'Lara Mohi',
      des: "You’re really good at obtaining first-hand customer information and using this information to improve our products and services. "

    },
    {
      id: 3,
      img: testmonialimg1,
      name:'AJ Azharul',
      des: "You’re really good at obtaining first-hand customer information and using this information to improve our products and services. "

    }
  ]
  return (
    <div className="mt-16 bg-[#301934] text-white pt-10 rounded-xl ">
      <div>
        <h2 className="text-center font-extrabold text-2xl">Customers Testimonial</h2>
        <p className="text-center text-3xl  mx-auto leading-normal text-green-600 font-bold mt-5">
          Read WHat Others Have to Say
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 pb-24 mt-8 ">
           {TestmonialData.map(({ id, img, name, des }) => (
            <div key={id} className="bg-white/10  p-8 rounded-xl mix-blend-luminosity shadow-md hover:scale-105 duration-500 py-2 ">
                 <div className=" justify-center"> 
                 <img src={img} alt="" className="rounded-full h-16 mx-auto" />   
                <h4 className="uppercase text-xl font-bold text-center mt-3">{name}</h4>
                 </div>
                <p className="text-sm leading-7 my-3 font-light opacity-50">{des}</p>

                <button className="btn btn-success">Get in Touch</button>
            </div>

           ))}
      </div>
      </div>
      
    </div>
  );
};

export default Testmonial;
