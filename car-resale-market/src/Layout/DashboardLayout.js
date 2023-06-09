import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";

import Navbar from "../Shared/Navbar/Navbar";


const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [loading, setloading] =useState(true);
 
  

   const [buyer, setBuyer] =useState();
  const [seller, setSeller] =useState();

  // const buyerr = useBuyer(user?.email);
  // console.log(buyer);
     useEffect(() => {
      if (user?.email) {
          fetch(`https://car-resale-market-server-site.vercel.app/users/buyer/${user?.email}`)
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  setBuyer(data.buyer);
                  setloading(false);
              })
      }
  }, [user])    


     useEffect(() => {
      if (user?.email) {
          fetch(`https://car-resale-market-server-site-selimalahi.vercel.app/users/seller/${user?.email}`)
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  setSeller(data.seller);
                  // setIsBuyerLoading(false);
              })
      }
  }, [user]) 
  console.log('line 49', loading);

  if(loading){
    return <p>loading</p>
  }
  console.log('line 54', loading);
  // console.log(seller);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}        
            
            
               
             {isSeller && (
                <>
                 <li>
                  <Link to="/dashboard/addproducts">Add Product</Link>
                </li>
                </>
              )
              
              
             }
              
            
                {
                  isBuyer &&<>
                  <li>
                  <Link to="/dashboard/myorders">My Orders</Link>
                </li>
                
                  </>
                }

            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All User</Link>
                </li>
                <li>
                  <Link to="/dashboard/allseller">All Seller</Link>
                </li>

               
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

// import React from 'react';

// const DashboardLayout = () => {
//   return (
//     <div>
//       <h1>lara</h1>
//     </div>
//   );
// };

// export default DashboardLayout;


