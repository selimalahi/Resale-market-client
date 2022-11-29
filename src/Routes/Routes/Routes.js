import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Product from './../../Pages/Product/Product';
// import Dashboard from './../../Pages/Dashboard/Dashboard/Dashboard';
import DashboardLayout from './../../Layout/DashboardLayout';
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
// import AllUsers from "../../Pages/Dashboard/AllUsersAndSeller/AllUsersAndSeller";
import AllUsersAndSeller from "../../Pages/Dashboard/AllUsersAndSeller/AllUsersAndSeller";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";


 const router =createBrowserRouter([
    {
       path:'/',
       element:<Main></Main>,
       children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path:'/product/:id',
            element:<Product></Product>,
            loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            
        }
       ] 
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/allusers',
                element:<AllUsersAndSeller></AllUsersAndSeller>
            },
            {
                path:'/dashboard/allseller',
                element: <AllSeller></AllSeller>
            }

        ]
    }
])
export default router;