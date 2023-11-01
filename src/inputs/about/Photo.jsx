import React, { useState, useRef } from "react";

const Photo = () => {
  const [image, setImage] = useState("./profile.jpg");
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imageURL = URL.createObjectURL(selectedFile);
      setImage(imageURL);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className=" flex mt-7 ">
      <img className="rounded-full h-20 w-20 " src={image} alt="Profile" />
      <h3 onClick={handleUploadClick}>Upload Photo</h3>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default Photo;
