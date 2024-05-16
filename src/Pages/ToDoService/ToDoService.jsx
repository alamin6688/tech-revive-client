import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const ToDoService = () => {
  const { user } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState([]);
  console.log(myBookings);

  useEffect(() => {
    axios
      .get(
        `https://tech-revive-server-phi.vercel.app/bookings?email=${user?.email}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setMyBookings(res.data);
      });
  }, [user?.email]);

  const handlePanding = (id) => {
    const status = {
      status: "pending",
    };
    axios
      .patch(`https://tech-revive-server-phi.vercel.app/bookings/${id}`, status)
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            title: "success!",
            text: "Status Updated Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };
  const handleWorking = (id) => {
    const status = {
      status: "working",
    };
    axios
      .patch(`https://tech-revive-server-phi.vercel.app/bookings/${id}`, status)
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            title: "success!",
            text: "Status Updated Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };
  const handCompleted = (id) => {
    const status = {
      status: "completed",
    };
    axios
      .patch(`https://tech-revive-server-phi.vercel.app/bookings/${id}`, status)
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            title: "success!",
            text: "Status Updated Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Services To Do</title>
      </Helmet>
      To Do Service Page
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-gray-200 text-[16px] font-bold text-black">
            <th>Profile</th>
            <th>Service Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {myBookings?.map((myBooking) => (
            <tr key={myBooking._id}>
              <td>
                <img
                  src={myBooking.serviceImage}
                  className="w-8 rounded-md h-8"
                />
              </td>
              <td>{myBooking.serviceName}</td>
              <td>
                <div className="flex gap-3">
                  <button onClick={()=>handlePanding(myBooking._id)} className="btn">
                    Pending
                  </button>
                  <button onClick={()=>handleWorking(myBooking._id)} className="btn">
                    Working
                  </button>
                  <button onClick={()=>handCompleted(myBooking._id)} className="btn">
                    Completed
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoService;
