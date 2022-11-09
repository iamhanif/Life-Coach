import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Programs from "../../Pages/Programs/Programs";


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
                path: '/programs/:id',
                element: <Programs />,
                loader: ({ params }) => fetch(`http://localhost:5000/programs/${params.id}`)
            }
        ]

    }
])

export default router 