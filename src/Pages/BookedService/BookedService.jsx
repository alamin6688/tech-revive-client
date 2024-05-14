import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookedServiceRow from "./BookedServiceRow";

const BookedService = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  return (
    <div>
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
            {bookings.map((booking) => (
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
