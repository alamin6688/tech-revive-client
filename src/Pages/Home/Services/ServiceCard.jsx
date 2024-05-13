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
      <div className="card-body space-y-3">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="card-title text-2xl font-bold">{serviceName}</h2>
          </div>
          <div>
            <img
              src={serviceProviderImage}
              alt="Provider Image"
              className="w-10 h-10 rounded-md object-cover"
              title="Service Provider Image"
            />
          </div>
        </div>
        <p className="text-[16px]">
          <span className="font-bold">Provider Name: </span>
          {serviceProviderName}
        </p>
        <p className="text-[16px]">
          <span className="font-bold">Info: </span>
          {serviceDescription}
        </p>
        <p className="text-[16px]">
          <span className="font-bold">Price: </span>
          {servicePrice}
        </p>
        <div className="card-actions justify-between">
            <Link to={`/services/${_id}`}>
              <button className="btn text-[16px] bg-[#FF3811] hover:bg-[#ff2a00] text-white border-none">
                View Details
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
