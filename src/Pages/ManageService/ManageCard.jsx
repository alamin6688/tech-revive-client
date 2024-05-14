import { Link } from "react-router-dom";

const ManageCard = ({ service, handleDelete }) => {
  const { _id, serviceName, serviceImage,serviceProviderName,serviceDescription,servicePrice } = service;

  return (
    <div className="card-compact w-full bg-base-100 shadow-2xl">
      <figure>
        <img src={serviceImage} className="object-cover" alt="Service Image" />
      </figure>
      <div className="card-body space-y-3">
        <div>
          <h2 className="card-title text-2xl font-bold">{serviceName}</h2>
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
        <div className="flex items-center justify-between">
          <div>
            <button className="btn text-[16px] bg-blue-600 hover:bg-blue-700 text-white border-none mb-2">
              Update
            </button>
          </div>
          <div>
            <Link to={`/services/${_id}`}>
              <button
                onClick={() => handleDelete(_id)}
                className="btn text-[16px] bg-[#FF3811] hover:bg-[#ff2a00] text-white border-none mb-2"
              >
                Delete
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCard;
