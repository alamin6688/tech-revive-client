import { useEffect, useState } from "react";
import ServiceCard from "../Home/Services/ServiceCard";

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-16 mb-16 bg-base-200 rounded-2xl pt-8 pb-10">
      <div className="border-b-8 border-[#FF3811] mb-10 shadow-lg">
        <h3 className="text-center text-4xl pt-4 pb-6 font-bold ">
          Popular All Services
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 p-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
