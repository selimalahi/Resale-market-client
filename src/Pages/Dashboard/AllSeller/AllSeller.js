import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {
    const {data: allusers = [] } =useQuery({
        queryKey:['allusers'],
        queryFn: async() =>{
            const res = await fetch('https://car-resale-market-server-site.vercel.app/allusers?role=seller');
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
        <h2 className="text-3xl">All seller</h2>
  
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allusers.map((seller, i) => (
                <tr key={seller._id}>
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>{seller.role}</td>
                  
                  <td>
                    <button className="btn btn-xs btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllSeller;