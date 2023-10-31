import React, { useState } from "react";
import Photo from "../inputs/about/Photo";

const Contact = ({ aboutData }) => {
  const { firstName, lastName, address, city, email, phone, summary } =
    aboutData;
  const [image, setImage] = useState("./profile.jpg");

  return (
    <>
      <div className="flex">
        <aside className=" bg-slate-700 text-white p-4 shadow-md py-7 pr-6 pl-14">
          <img
            className="rounded-full h-44 w-44 mb-3"
            src={image}
            alt="Profile"
          />
          <h3 className="text-lg text-gray-100 font-bold font-roboto">
            Contact
          </h3>

          <div className="output-row mt-4">
            <div className="output-field flex items-center justify-center text-center">
              <svg
                className=" "
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <p className="text-lg ">{address}</p>
              <p className="text-lg ">{city}</p>
            </div>
          </div>

          <div className="output-row mt-4">
            <div className="output-field">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <p className="text-lg">{email}</p>
            </div>
          </div>

          <div className="output-row mt-4">
            <div className="output-field">
              <p className="text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  className="mr-2 inline"
                  viewBox="0 0 384 512"
                >
                  <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
                </svg>
                {phone}
              </p>
            </div>
          </div>
        </aside>
        <section className=" px-7 py-6">
          <div className="output-row mt-4">
            <div className="output-field ">
              <h2 className="font-semibold pb-1 text-3xl font-poppins">
                {firstName} {lastName}
              </h2>
            </div>
          </div>
          <div className="output-row mt-4">
            <div className="output-field">
              <p className=" text-base text-gray-700 leading-5 font-roboto">
                {summary}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
