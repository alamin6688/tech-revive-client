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
import BookedServices from "../Pages/BookedServices/BookedServices";
import ToDoService from "../Pages/ToDoService/ToDoService";



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
            path: '/all-services',
            element: <AllServices></AllServices>
        },
        {
            path: '/add-service',
            element: <AddService></AddService>
        },
        {
            path: '/manage-service',
            element: <ManageService></ManageService>
        },
        {
            path: '/booked-service',
            element: <BookedServices></BookedServices>
        },
        {
            path: '/to-do-service',
            element: <ToDoService></ToDoService>
        },
        {
            path: '/dashboard',
            element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
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