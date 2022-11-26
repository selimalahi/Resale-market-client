import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {

    const [services, setServices] =useState([]);



    useEffect( () =>{
        fetch('categories.json')
        .then(res => res.json()
        .then(data =>setServices(data)))
    }, [])
    return (
        <div  className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service => <Category
                key={service.id}
                service={service}
                ></Category>)
            }
        </div>
    );
};

export default Categories;