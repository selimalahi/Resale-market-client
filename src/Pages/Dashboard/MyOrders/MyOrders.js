import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from '@tanstack/react-query';


const MyOrders = () => {
    
    const {user} = useContext(AuthContext);

    const url =`http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings  = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () =>{
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
     
  return (
    <div>
      <h2 className="text-3xl mb-7">My Orders</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Products</th>                           
              <th>Price</th>
              <th>Pay</th>
              

              
            </tr>
          </thead>
          <tbody className="mt-6">
            {
                bookings.map((booking, i) =><tr key={booking._id}>
                    <th>{i+1}</th>
                    <td>{booking.img}</td>
                    <td>{booking.productName}</td>
                    <td>{booking.price}</td>
                    <button ><td className="btn btn-accent ml-2 ">Pay Now</td></button>
                    
                  </tr>)
            }          
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
