import React, { useState } from "react";
import Photo from "./Photo";

const About = ({ updateData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    email: "",
    phone: "",
    summary: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the state using the spread operator to keep existing values
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Update the parent component's state with the new data
    updateData((prevAboutData) => ({
      ...prevAboutData,
      [name]: value,
    }));
  };

  return (
    <>
      <h2 className=" text-blue-600 px-5 pt-5 pb-0 text-5xl font-bold">
        About <br /> Yourself
      </h2>
      <div className=" border border-r-2 px-4 pt-4 pb-9">
        <Photo />

        <div className="flex">
          <div className="flex flex-col m-5">
            <label className="text-sm pb-2 text-slate-500 leading-4">
              First Name
            </label>
            <input
              className="border border-black py-1 pl-2 rounded"
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col m-5">
            <label className="text-sm pb-2 text-slate-500 leading-4">
              Last Name
            </label>
            <input
              className="border border-black py-1 pl-2 rounded"
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col m-5">
            <label className="text-sm pb-2 text-slate-500 leading-4">
              Address
            </label>
            <input
              className="border border-black py-1 pl-2 rounded"
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col m-5">
            <label className="text-sm pb-2 text-slate-500 leading-4">
              City
            </label>
            <input
              className="border border-black py-1 pl-2 rounded"
              type="text"
              name="city"
              id="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-col m-5">
            <label className="text-sm pb-2 text-slate-500 leading-4">
              Email
            </label>
            <input
              className="border border-black py-1 pl-2 rounded"
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col m-5">
            <label className="text-sm pb-2 text-slate-500 leading-4">
              Phone
            </label>
            <div>
              <input
                className="border border-black py-1 pl-2 rounded"
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col m-5">
          <label className="text-sm pb-2 text-slate-500 leading-4">
            Summary
          </label>
          <textarea
            className="border border-black py-1 pl-2 rounded"
            rows={3}
            cols={30}
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default About;
