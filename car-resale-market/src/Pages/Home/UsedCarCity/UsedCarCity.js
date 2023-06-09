import React from 'react';
import img1 from '../../../assets/icon/google-ad-wide.jpg';
const UsedCarCity = () => {

    const contryName =[
        {
            id:1,
            Name:'London',
            number:"(96)"
        },
        {
            id:2,
            Name:'New York',
            number:"(96)"
        },   
        {
            id:3,
            Name:'Atlanta',
            number:"(96)"
        },
        {
            id:4,
            Name:'Andalusia',
            number:"(96)"
        },
        {
            id:24,
            Name:'Anchorage',
            number:"(96)"
        },
        {
            id:5,
            Name:'Cucamonga',
            number:"(96)"
        },
        {
            id:6,
            Name:'Rancho Cucamonga',
            number:"(96)"
        },
        {
            id:7,
            Name:'Modesto',
            number:"(96)"
        },
        {
            id:8,
            Name:'Laguna Beach',
            number:"(96)"
        },
        {
            id:9,
            Name:'Huntington Beach ',
            number:"(96)"
        },
        {
            id:10,
            Name:'Downey',
            number:"(96)"
        },
        {
            id:11,
            Name:' Barstow',
            number:"(96)"
        },
        {
            id:12,
            Name:'Arcadia',
            number:"(96)"
        },
        {
            id:13,
            Name:'Alameda ',
            number:"(96)"
        },
        {
            id:14,
            Name:'Little Rock',
            number:"(96)"
        },
        {
            id:15,
            Name:'Hot Springs',
            number:"(96)"
        },
        {
            id:16,
            Name:'Forrest City',
            number:"(96)"
        },
        {
            id:17,
            Name:'Camden',
            number:"(96)"
        },
        {
            id:18,
            Name:' Batesville',
            number:"(96)"
        },
        {
            id:19,
            Name:'Arkadelphia',
            number:"(96)"
        },
        {
            id:20,
            Name:'Prescott',
            number:"(96)"
        },
        {
            id:21,
            Name:'Flagstaff',
            number:"(96)"
        },
        {
            id:22,
            Name:'Haines',
            number:"(96)"
        },
        {
            id:23,
            Name:'Fairbanks',
            number:"(96)"
        },
    ]
    return (
        <div className='mt-12'>
            <h1 className='text-4xl text-center'>Used Cars By <span className='text-[#5DC302]'>Cities</span></h1>           
            <div className='mt-8  '> 
            <p className='text-2xl mx-auto'>Integer faucibus molestie commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse est neque, sagittis vitae dolor vel, egestas sagittis mi. Ut ut mi ut lacus tempor varius. Mauris pellentesque vestibulum sagittis. In faucibus, erat ac rhoncus vehicula, elit orci vestibulum ex, quis iaculis erat nisl sit amet lacus.</p> 
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-0"> 
              {
                contryName.map(({id, Name, number}) =>(
                    <div key={id} className='flex  mx-auto mt-8'>
                        <h3>{Name}</h3>
                        <p className='ml-2 text-[#5DC302]'>{number}</p>
                    </div>
                )
                
                )}
            </div>

            <div   className=' mt-10 '>
                <img src={img1} alt=" logogogo" className='mx-auto'/>
            </div>
        </div>
    );
};

export default UsedCarCity;