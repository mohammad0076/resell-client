import src from "daisyui";
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
import Mypro from "../Shared/Add product/Mypro";
import Login from "../SignUp/Login/Login";
import Signup from "../SignUp/Signup";
import Blog from "../Vlog/Blog";
import AdminRoute from "./Admin/AdminRoute";
import UserRoute from "./userRoute/Userroute";
import ff from './404-not-found-error-explained-2622936-Final-fde7be1b7e2e499c9f039d97183e7f52.jpg'
import Adv from "../Shared/Add product/Adv";

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
            path: "/blogs",
            element: <Blog></Blog>

        },
        {
            path: "/adv",
            element: <Adv></Adv>

        },
        {
            path: "/category",
            element: <Cat></Cat>,
            loader: () => fetch('https://oobbss-server.vercel.app/categorys/')

        },
        {
            path: "/category/:id",
            loader: ({ params }) => fetch(`https://oobbss-server.vercel.app/category/${params.id}`),
            element: <PrivateRoute><Dtails></Dtails></PrivateRoute>

        },


    ]

},
{
    path: '*', element: <div>This route not found go to hell

        <img src={ff} alt="MDN logo" />
    </div>
},
{
    path: '/dashboard',
    loader: () => fetch('https://oobbss-server.vercel.app/users/Seller'),
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
        },
        {
            path: '/dashboard/myproducts',
            element: <UserRoute><Mypro></Mypro></UserRoute>
        }

    ]
}

])

