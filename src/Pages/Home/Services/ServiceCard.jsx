import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
  const {
    _id,
    serviceName,
    serviceDescription,
    serviceImage,
    serviceProviderImage,
    servicePrice,
    serviceProviderName,
  } = service;

  return (
    <div className="card-compact w-full bg-base-100 shadow-2xl">
      <figure>
        <img src={serviceImage} className="object-cover" alt="Service Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p>{serviceDescription}</p>
        <p>Provider Info:</p>
        <div className="flex justify-start items-center gap-3">
          <div className="avatar">
            <div className="w-8 rounded">
              <img
                src={serviceProviderImage}
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
          <div>
            <p>{serviceProviderName}</p>
          </div>
        </div>
        <p>{servicePrice}</p>
        <div className="card-actions justify-start">
          <Link to={`/services/${_id}`} >
            <button className="btn btn-primary">
                View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
