import React from "react";

function TrainingOutput({ title, instituteName, date, description }) {
  return (
    <div className="training">
      <h2>Training</h2>
      <p>Title: {title}</p>
      <p>Institution/Organization: {instituteName}</p>
      <p>Completion Date: {date}</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default TrainingOutput;
