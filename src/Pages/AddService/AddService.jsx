import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AddService = () => {
  const {user}=useContext(AuthContext)
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value.toLowerCase();
    const price = form.price.value;
    const area = form.area.value.toLowerCase();
    const description = form.description.value;
    const name = form.name.value.toLowerCase();
    const email = form.email.value;
    const providerImage = form.providerImage.value;
    const serviceImage = form.serviceImage.value;

    const newAddInfo = {
      serviceName: serviceName,
      serviceArea: area,
      serviceDescription: description,
      servicePrice: price,
      serviceProviderName: name,
      email,
      serviceProviderImage: providerImage,
      serviceImage: serviceImage,
    };
    console.log(newAddInfo);

    //post servive
    fetch("https://tech-revive-server-phi.vercel.app/add-service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAddInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "success!",
            text: "Service Added Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          // form.reset();
        }
      });
  };

  return (
    <div className="bg-base-200 p-4 lg:p-16 rounded-3xl shadow-2xl my-10">
      <Helmet>
        <title>Add Service</title>
      </Helmet>
      <div className="border-b-8 border-[#FF3811] mb-10 rounded-3xl shadow-xl">
        <h3 className="text-center  text-4xl pt-4 pb-6 font-bold ">
          Add Service
        </h3>
      </div>
      <form onSubmit={handleAdd}>
        {/* 1st row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Service Name</label>
            <input
              type="text"
              name="serviceName"
              placeholder="Service Name"
              className="input input-bordered border-none bg-gray-200 w-full"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Price </label>
            <input
              type="number"
              name="price"
              placeholder="Price in $"
              className="input input-bordered border-none bg-gray-200 w-full"
            />
          </div>
        </div>
        {/* 2nd row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Service Area</label>
            <input
              type="text"
              name="area"
              placeholder="Service Area"
              className="input input-bordered border-none bg-gray-200 w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Short Description</label>
            <input
              type="text"
              name="description"
              placeholder="Short Description"
              className="input input-bordered border-none bg-gray-200 w-full"
            />
          </div>
        </div>
        {/* 3rd row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Provider Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered border-none bg-gray-200 w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Provider Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered border-none bg-gray-200 w-full"
            />
          </div>
        </div>
        {/* 4th row */}
        <div className="mb-8">
          <div className="w-full">
            <label className="text-black font-bold">Provider Image URl</label>
            <input
              type="text"
              name="providerImage"
              defaultValue={user?.photoURL}
              className="input input-bordered border-none bg-gray-200 w-full"
            />
          </div>
        </div>
        {/* 5th row */}
        <div className="w-full mb-8">
          <label className="text-black font-bold">Service Image URl</label>
          <input
            type="text"
            name="serviceImage"
            placeholder="Image URL Here..."
            className="input input-bordered border-none bg-gray-200 w-full"
          />
        </div>

        {/* submit here */}
        <input
          type="submit"
          value="Add Service"
          className="btn text-[18px] bg-[#FF3811] hover:bg-[#ff2a00] text-white border-none w-full"
        />
      </form>
    </div>
  );
};

export default AddService;
