import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const {
    serviceImage,
    serviceName,
    serviceDescription,
    serviceProviderImage,
    serviceProviderName,
    serviceArea,
    servicePrice,
  } = service;

  return (
    <div>
      <div>
        <div className="border-b-8 border-[#FF3811] bg-base-200 mb-6 rounded-3xl shadow-xl mt-6">
          <h2 className="text-center text-4xl pt-8 pb-8 font-bold">
            Service Detailes
          </h2>
        </div>
      </div>
      <div className="card lg:card-side bg-base-200 shadow-2xl mt-12">
        <figure className="w-[95%] mx-auto md:w-1/2 p-6">
          <img src={serviceImage} className="rounded-2xl shadow-2xl" />
        </figure>
        <div className="card-body w-full lg:w-1/2">
          <div className="flex gap-2 items-center justify-start lg:pt-10">
            <img
              src={serviceProviderImage}
              className="rounded-2xl w-12 h-12 object-cover"
            />
            <h2 className="card-title uppercase text-2xl md:text-3xl mb-2">
              {serviceProviderName}
            </h2>
          </div>
          <div className="space-y-2 pt-4">
            <p>
              <strong>Service Name:</strong> {serviceName}
            </p>
            <p>
              <strong>Description:</strong> {serviceDescription}
            </p>
            <p>
              <strong>Area:</strong> {serviceArea}
            </p>
            <p>
              <strong>Price:</strong> {servicePrice}
            </p>
          </div>

          <button className="btn text-[18px] bg-[#FF3811] hover:bg-[#ff2a00] text-white border-none w-3/12 mt-2 mb-4">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
