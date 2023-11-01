import React, { useState } from "react";
import TrainingOutput from "../outputs/TrainigOutput";

function DropdownForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [instituteName, setInstituteName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInstituteNameChange = (e) => {
    setInstituteName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="dropdown p-4">
      <div className=" flex gap-2">
        <h2>{title || "Certification Title"}</h2>{" "}
        {/* Display the title in the h2 tag */}
        <button className="dropdown-button" onClick={toggleForm}>
          {isFormOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z" />
            </svg>
          )}
        </button>
      </div>
      {isFormOpen ? (
        <div className="dropdown-content">
          <div className="form">
            <form>
              <label
                className="text-sm pb-3 text-slate-500 leading-4 "
                htmlFor="title"
              >
                Training/Certification title
              </label>
              <br />
              <input
                className="w-full rounded-sm py-3 pr-8 pl-2 border-2 border-gray-300 bg-gray-300 outline-none"
                type="text"
                id="title"
                name="title"
                value={title} // Set the input value to the title state
                onChange={handleTitleChange} // Handle title change
              />
              <br />
              <br />
              <label
                className="text-sm pb-2 text-slate-500 leading-4"
                htmlFor="instituteName"
              >
                Institution/Organization
              </label>
              <br />
              <input
                className="w-full rounded-sm py-3 pr-8 pl-2 border-2 border-gray-300 bg-gray-300 outline-none"
                type="text"
                id="instituteName"
                name="instituteName"
                value={instituteName}
                onChange={handleInstituteNameChange}
              />
              <br />
              <label
                className="text-sm pb-2 text-slate-500 leading-4"
                htmlFor="date"
              >
                Completion Date
              </label>
              <br />
              <input
                className="w-full rounded-sm py-3 pr-8 pl-2 border-2 border-gray-300 bg-gray-300 outline-none"
                type="text"
                id="date"
                name="date"
                value={date}
                onChange={handleDateChange}
              />
              <br />
              <label
                className="text-sm pb-2 text-slate-500 leading-4"
                htmlFor="instituteName"
              >
                Description
              </label>
              <br />
              <textarea
                className=" w-full"
                rows={3}
                cols={30}
                type="textarea"
                id="description"
                name="description"
                value={description}
                onChange={handleDescriptionChange}
              />
              <br />
            </form>
          </div>
        </div>
      ) : (
        <TrainingOutput
          title={title}
          instituteName={instituteName}
          date={date}
          description={description}
        />
      )}
    </div>
  );
}

export default DropdownForm;
