import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../Page/Course/Course";
import Courses from "../../Page/Courses/Courses";
import Home from "../../Page/Home/Home";
import Login from "../../Page/Shared/Login/Login";
import Register from "../../Page/Shared/Register/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])