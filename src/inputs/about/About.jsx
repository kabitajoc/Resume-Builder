import React, { useState } from "react";
import Photo from "./Photo";

const About = ({ updateData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the state of the respective input field based on its name
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "address") {
      setAddress(value);
    } else if (name === "city") {
      setCity(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "summary") {
      setSummary(value);
    }

    // Create an object with the updated values
    const updatedData = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      email: email,
      phone: phone,
      summary: summary,
    };

    // Update the parent component's state with the new data
    updateData(updatedData);
  };

  return (
    <div className=" border border-r-2">
      <Photo />
      <div>
        <label>First Name</label>
        <input
          className="border border-black m-5 py-1 pl-2"
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={handleInputChange}
        />

        <label>Last Name</label>
        <input
          className="border border-black m-5 py-1 pl-2"
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Address</label>
        <input
          className="border border-black m-5 py-1 pl-2"
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={handleInputChange}
        />

        <label>City</label>
        <input
          className="border border-black m-5 py-1 pl-2"
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          className="border border-black m-5 py-1 pl-2"
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleInputChange}
        />
        <label>Phone</label>
        <input
          className="border border-black m-5 py-1 pl-2"
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Summary</label>
        <textarea
          className="border border-black m-5 py-1 pl-2"
          rows={3}
          cols={30}
          name="summary"
          value={summary}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default About;
