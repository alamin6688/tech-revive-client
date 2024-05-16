import { useEffect, useState } from "react";
import ManageCard from "./ManageCard";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const ManageService = () => {
  const [services, setServices] = useState([]);


  const url = `https://tech-revive-server-phi.vercel.app/services`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [url]);



  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://tech-revive-server-phi.vercel.app/services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {

            Swal.fire({
              position: "center",
              icon: "success",
              title: "Deleted Successfully!",
              showConfirmButton: false,
              timer: 1500
            });

            const cardRemaining = services.filter(
              (service) => service._id !== id
            );
            setServices(cardRemaining);

            // Navigate after deleting
            // navigate(location?.state ? location.state : "/manage-service");
          }
        })
        .catch((error) => {
          console.error("Error deleting!", error);
        });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Manage Services</title>
      </Helmet>
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
