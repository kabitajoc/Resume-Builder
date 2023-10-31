import React, { useState } from "react";
import About from "./inputs/about/About";
import DropdownWithInputs from "./inputs/DropdownWithInputs";

import Contact from "./outputs/Contact";
// import InputComponent from "./components/InputComponent";
// import RenderComponent from "./components/RenderComponents";

function App() {
  const [aboutData, setAboutData] = useState({});

  const updateAboutData = (data) => {
    setAboutData(data);
  };

  return (
    <>
      <div className="flex">
        <div>
          <h1 className="bg-slate-700 text-white">React Form</h1>
          <About updateData={updateAboutData} />
          <DropdownWithInputs />
        </div>
        <div>
          <Contact aboutData={aboutData} />
        </div>
      </div>
    </>
  );
}

export default App;
