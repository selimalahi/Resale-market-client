import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {

    // const [services, setServices] =useState([]);



    const {data:categoriesData =[]} = useQuery({
        queryKey: ['categoriesData'],
        queryFn: () => fetch('https://car-resale-market-server-site-selimalahi.vercel.app/categoriesData')
        .then(res => res.json())
    })



    // useEffect( () =>{
    //     fetch('https://car-resale-market-server-site.vercel.app/categoriesData')
    //     .then(res => res.json())
    //     .then(data =>setServices(data)))
    // }, [])
    return (
       <div className='mt-10'>
        <div > 
            <h1 className="text-center font-extrabold text-4xl">Find Car by Type</h1>
            <p className="text-2xl  mx-auto  text-green-600 font-bold mt-5 text-center">We offer professional car rental & limousine services in our range of high-end vehicles</p>
        </div>
        <div  className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categoriesData.map(service => <Category
                key={service.id}
                service={service}
                ></Category>)
            }
        </div>
       </div>
    );
};

export default Categories;