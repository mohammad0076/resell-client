import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Dashboardlayout from "../../Main/Dashboardlayout";
import Main from "../../Main/Main";
import Allusers from "../allusers/Allusers";
import Cat from "../category/Cat";
import Dtails from "../category/Dtails";
import Dash from "../Dasj/Dash";
import Mydsh from "../Dasj/Mydsh";
import Home from "../Home/Home";
import PrivateRoute from "../Navigate/PrivateRoute";
import Addpro from "../Shared/Add product/Addpro";
import Login from "../SignUp/Login/Login";
import Signup from "../SignUp/Signup";
import AdminRoute from "./Admin/AdminRoute";
import UserRoute from "./userRoute/Userroute";


export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>
    ,
    children: [
        {
            path: "/",
            element: <Home></Home>

        },
        {
            path: "/login",
            element: <Login></Login>

        },
        {
            path: "/signup",
            element: <Signup></Signup>

        },
        {
            path: "/category",
            element: <Cat></Cat>,
            loader: () => fetch('http://localhost:5000/categorys/')

        },
        {
            path: "/category/:id",
            loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
            element: <PrivateRoute><Dtails></Dtails></PrivateRoute>

        },


    ]

},

{
    path: '/dashboard',
    loader: () => fetch('http://localhost:5000/users/Seller'),
    element: <PrivateRoute><Dashboardlayout></Dashboardlayout></PrivateRoute>,
    children: [
        {
            path: '/dashboard',
            element: <Mydsh></Mydsh>
        },
        {
            path: 'dashboard/allbuyers',
            element: <AdminRoute><Allusers></Allusers></AdminRoute>
        },
        {
            path: 'dashboard/addaproduct',
            element: <UserRoute><Addpro></Addpro></UserRoute>
        }

    ]
}


])

