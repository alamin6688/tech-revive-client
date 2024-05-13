import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";



const Services = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 p-4">
                {
                    services.map(service => <ServiceCard 
                        key="service._id" 
                        service={service}>
                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;