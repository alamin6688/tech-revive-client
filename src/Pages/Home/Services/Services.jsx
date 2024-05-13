import  { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";


const Services = () => {
    const [services, setServices] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    const displayedServices = showAll ? services : services.slice(0, 6);

    return (
        <div className="mt-16 mb-16 bg-base-200 rounded-2xl pt-8 pb-10">
            <div className="text-center space-y-5">
                <h3 className="text-4xl md:text-5xl font-bold pt-4">
                    Popular Services
                </h3>
                <p className="w-[95%] md:w-3/4 mx-auto text-[18px]">
                    Trustworthy electronic item repair services, specializing in diagnosing and resolving issues with precision and care. So you can enjoy your devices with peace of mind.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 p-6">
                {displayedServices.map(service => (
                    <ServiceCard 
                    key={service._id} 
                    service={service} />
                ))}
            </div>
            {!showAll && (
                <div className="flex mt-8 justify-center  mb-1">
                <Link to="/all-services">
                <button onClick={() => setShowAll(true)} className="btn text-[18px] bg-[#FF3811] hover:bg-[#ff2a00] text-white border-none">Show All...</button></Link>
                </div>
            )}
        </div>
    );
};

export default Services;
