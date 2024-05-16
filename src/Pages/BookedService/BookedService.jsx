import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookedServiceRow from "./BookedServiceRow";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const BookedService = () => {
  const { user } = useContext(AuthContext);
  const axiousSecure = useAxiosSecure();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axiousSecure
      .get(`https://tech-revive-server-phi.vercel.app/bookings?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setBookings(res.data);
      });
  }, [user?.email, axiousSecure]);

  return (
    <div>
      <Helmet>
        <title>Booked Services</title>
      </Helmet>
      <div className="border-b-8 border-[#FF3811] bg-base-200 mb-6 rounded-3xl shadow-xl mt-6">
        <h3 className="text-center text-4xl pt-6 pb-6 font-bold">
          Your Booked Services
        </h3>
      </div>
      <div className="overflow-x-auto bg-base-200 w-[90%] md:w-full mx-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gray-200 text-[16px] font-bold text-black">
              <th>Profile</th>
              <th>Service Name</th>
              <th>Provider Name</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <BookedServiceRow
                key={booking._id}
                booking={booking}
              ></BookedServiceRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedService;
