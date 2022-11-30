import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
// import useBuyer from "../hooks/useBuyer";
import useAdmin from "../hooks/useAdmin";
// import useBuyer from "../hooks/useBuyer";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  // const [isBuyer] = useBuyer(user?.email);
  console.log(user);

  //   useEffect(() => {
  //     if (user?.email) {
  //         fetch(`http://localhost:5000/users/buyer/${user?.email}`)
  //             .then(res => res.json())
  //             .then(data => {
  //                 console.log(data);
  //                 // setIsBuyer(data.isBuyer);
  //                 // setIsBuyerLoading(false);
  //             })
  //     }
  // }, [user])

  // console.log({isAdmin});
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

           
            <li>
                  <Link to="/dashboard">Seller</Link>
                </li>
                <li>
                  <Link to="/dashboard">My Orders</Link>
                </li>

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
