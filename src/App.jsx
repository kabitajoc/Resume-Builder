import React, { useState } from "react";
import About from "./inputs/about/About";
// import DropdownWithInputs from "./inputs/DropdownWithInputs";
import Contact from "./outputs/Contact";
// import TrainingForm from "./inputs/about/TrainingForm";
import DropdownForm from "./inputs/DropdownWithInputs";
import TrainingOutput from "./outputs/TrainigOutput";

function App() {
  const [aboutData, setAboutData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    email: "",
    phone: "",
    summary: "",
  });

  const updateAboutData = (data) => {
    setAboutData(data);
  };

  return (
    <>
      <div className="flex">
        <div>
          <h1 className="bg-slate-700 text-white">React Form</h1>
          <About updateData={updateAboutData} />

          <DropdownForm />
          <TrainingOutput/>
        </div>
        <div>
          <Contact aboutData={aboutData} />
        </div>
      </div>
    </>
  );
}

export default App;
