import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const BookedServices = () => {

    const {user} = useContext(AuthContext);
    const services =useLoaderData();
    const {id} = useParams() 
    const selectedService = services.find((service) => service._id === id)
    console.log(selectedService)

    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const serviceId = form.serviceId.value;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const providerName = form.providerName.value;
        const providerEmail = form.providerEmail.value;
        const instruction = form.instruction.value;
        const serviceImage = form.serviceImage.value;
        const date = form.date.value;
        const name = form.name.value;
        const email = user?.email;
        const booking = {
            serviceId,
            serviceName,
            providerEmail,
            providerName,
            name,
            email,
            instruction,
            serviceImage,
            date,
            price
        }
        
        console.log(booking)
        
        axios.post('http://localhost:5000/bookings',booking)
        .then(res => {
          if (res.data.acknowledged) {
            Swal.fire({
              title: "Booked!",
              text: "Service Booked Successfully!",
              icon: "success",
              confirmButtonText: "Okay",
            });
          }
          // form.reset()
        })

    }



    return (
        <div className="bg-base-200 p-4 lg:p-16 rounded-3xl shadow-2xl my-10">
        <div className="border-b-8 border-[#FF3811] mb-10 rounded-3xl shadow-xl w-full">
        <h3 className="text-center text-4xl pt-4 pb-6 font-bold ">
          Book Your Service
        </h3>
      </div>
      <form onSubmit={handleBookService}>
        {/* 1st row */}
        <div className="w-full mb-8">
          <label className="text-black font-bold">Service Id</label>
          <input
            type="text"
            name="serviceId"
            defaultValue={selectedService._id}
            className="input input-bordered border-none bg-gray-200 w-full"
          />
        </div>

        {/* 2nd row */}
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Service Name</label>
            <input
              type="text"
              name="serviceName"
              defaultValue={selectedService.serviceName}
              className="input input-bordered border-none bg-gray-200 w-full"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Price </label>
            <input
              type="number"
              name="price"
              defaultValue={80}
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
              name="providerName"
              placeholder="Provider Name"
              className="input input-bordered border-none bg-gray-200 w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Provider Email</label>
            <input
              type="email"
              name="providerEmail"
              placeholder="Provider Email"
              className="input input-bordered border-none bg-gray-200 w-full"
            />
          </div>
        </div>

        {/* 4th row */}

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">User Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered border-none bg-gray-200 w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">User Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered border-none bg-gray-200 w-full"
            />
          </div>
        </div>

        {/* 5th row */}

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Service Taking Date</label>
            <input
              type="date"
              name="date"
              placeholder="Service Taking Date"
              className="input input-bordered border-none bg-gray-200 w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Special Instruction</label>
            <input
              type="text"
              name="instruction"
              placeholder="Special Instruction"
              className="input input-bordered border-none bg-gray-200 w-full"
            />
          </div>
        </div>

        {/* 6th row */}

        <div className="w-full mb-8">
          <label className="text-black font-bold">Service Image URl</label>
          <input
            type="text"
            name="serviceImage"
            defaultValue={selectedService.serviceImage}
            className="input input-bordered border-none bg-gray-200 w-full"
          />
        </div>

        {/* submit here */}
        <input
          type="submit"
          value="Purchase"
          className="btn text-[18px] bg-[#FF3811] hover:bg-[#ff2a00] text-white border-none w-full"
        />
      </form>
    </div>
    );
};

export default BookedServices;