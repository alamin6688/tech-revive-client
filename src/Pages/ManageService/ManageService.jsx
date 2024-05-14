import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ManageCard from "./ManageCard";

const ManageService = () => {

    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
  
    const url = `http://localhost:5000/services`;
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, [url]);

    return (
        <div>
            Manage Service Page {services.length}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 p-6 bg-base-200">
            {services.map((service) => (
              <ManageCard
                key={service._id}
                service={service}
              ></ManageCard>
            ))}
            </div>
        </div>
    );
};

export default ManageService;