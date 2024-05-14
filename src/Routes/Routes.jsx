import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Home/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllServices from "../Pages/AllServices/AllServices";
import PrivateRoute from "./PrivateRoute";
import AddService from "../Pages/AddService/AddService";
import ManageService from "../Pages/ManageService/ManageService";
// import BookedServices from "../Pages/BookedServices/BookedServices";
import ToDoService from "../Pages/ToDoService/ToDoService";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import BookedServices from "../Pages/BookedServices/BookedServices";
import BookedService from "../Pages/BookedService/BookedService";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'services/:id',
            element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`),
        },
        {
            path: '/all-services',
            element: <AllServices></AllServices>
        },
        {
            path: '/dashboard',
            element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
            path: '/add-service',
            element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
            path: '/manage-service',
            element: <PrivateRoute><ManageService></ManageService></PrivateRoute>
        },
        {
            path: '/booked-service',
            element: <BookedService></BookedService>
        },
        {
            path: '/booked-service/:id',
            element: <PrivateRoute><BookedServices></BookedServices></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/services')
        },
        {
            path: '/to-do-service',
            element: <PrivateRoute><ToDoService></ToDoService></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/sign-up',
            element: <SignUp></SignUp>
        },
      ]
    },
  ]);

  export default router;