import { useEffect, useState } from "react";
import ServiceCard from "../Home/Services/ServiceCard";
import { Helmet } from "react-helmet-async";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://tech-revive-server-phi.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        // 0.5 second delay before setting loading to false
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }, []);

  return (
    <div className="mt-16 mb-16 bg-base-200 rounded-2xl pt-8 pb-10">
      <Helmet>
        <title>
        All Services
        </title>
      </Helmet>
      <div className="border-b-8 border-[#FF3811] mb-10 shadow-lg">
        <h3 className="text-center text-4xl pt-4 pb-6 font-bold ">
          All Popular Services
        </h3>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 p-4 px-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllServices;
