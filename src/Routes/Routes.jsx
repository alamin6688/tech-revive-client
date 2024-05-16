import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Home/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllServices from "../Pages/AllServices/AllServices";
import PrivateRoute from "./PrivateRoute";
import AddService from "../Pages/AddService/AddService";
import ManageService from "../Pages/ManageService/ManageService";
// import BookedServices from "../Pages/BookedServices/BookedServices";
import ToDoService from "../Pages/ToDoService/ToDoService";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import BookedServices from "../Pages/BookedServices/BookedServices";
import BookedService from "../Pages/BookedService/BookedService";
import UpdateService from "../Pages/UpdateService/UpdateService";



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
            loader: ({params})=>fetch(`https://tech-revive-server-phi.vercel.app/services/${params.id}`),
        },
        {
            path: '/all-services',
            element: <AllServices></AllServices>
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
            path: '/update-service/:id',
            element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
            loader: ()=> fetch(`https://tech-revive-server-phi.vercel.app/services`)
        },
        {
            path: '/booked-service',
            element: <PrivateRoute><BookedService></BookedService></PrivateRoute>,
        },
        {
            path: '/booked-service/:id',
            element: <PrivateRoute><BookedServices></BookedServices></PrivateRoute>,
            loader: () => fetch('https://tech-revive-server-phi.vercel.app/services')
        },
        {
            path: '/to-do-service',
            element:<ToDoService></ToDoService>
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