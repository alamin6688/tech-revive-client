import { useEffect, useState } from "react";
import ManageCard from "./ManageCard";
import { useNavigate } from "react-router-dom";

const ManageService = () => {

  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  const url = `http://localhost:5000/services`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.deletedCount > 0) {
            const cardRemaining = services.filter((service) => service._id !== id);
            setServices(cardRemaining);
  
            // Navigate after deleting
            navigate(location?.state ? location.state : "/manage-service");
          }
        })
        .catch((error) => {
          console.error("Error deleting!", error);
        });
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 p-6 bg-base-200">
        {services.map((service) => (
          <ManageCard
            key={service._id}
            service={service}
            handleDelete={handleDelete}
          ></ManageCard>
        ))}
      </div>
    </div>
  );
};

export default ManageService;
