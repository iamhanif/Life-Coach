import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import AddService from "../../Pages/Home/Services/AddService";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Programs from "../../Pages/Programs/Programs";
import Reviews from "../../Pages/Reviews/Reviews";
import Blogs from "../../Pages/Shared/Blogs/Blogs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://life-coach-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <Reviews />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/programs/:id',
                element: <Programs />,
                loader: ({ params }) => fetch(`https://life-coach-server.vercel.app/programs/${params.id}`)
            }
        ]

    }
])

export default router 