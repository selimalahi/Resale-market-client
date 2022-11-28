import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Product from './../../Pages/Product/Product';


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
    }
])
export default router;