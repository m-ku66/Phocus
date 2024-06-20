"use client";
import React, { useState } from "react";
import { HiArrowCircleUp } from "react-icons/hi";

type PhotoProps = {
  setfile: React.Dispatch<React.SetStateAction<File | null>>;
};

const UploadPhoto = (props: PhotoProps) => {
  const { setfile } = props;
  const [selectedFile, setselectedFile] = useState<File | null>(null); // State to store file uploaded by user

  return (
    <div
      className={`cursor-pointer flex items-center justify-center w-[300px] h-[400px] bg-${
        selectedFile ? "transparent" : "gray-200"
      }`}
    >
      {/* display the photo that the user uploads based on selected file state */}
      {selectedFile ? (
        <div className="relative flex flex-col gap-1 items-center">
          <img
            src={window.URL.createObjectURL(selectedFile)}
            className="object-contain"
            alt="selected image file"
          />
          <label
            htmlFor="dropzone-file"
            className="absolute w-full h-full text-transparent"
          >
            Upload a file
          </label>
          <input
            onChange={(e) => {
              setfile(e.target.files ? e.target.files[0] : null),
                setselectedFile(e.target.files ? e.target.files[0] : null);
            }}
            type="file"
            id="dropzone-file"
            className="hidden"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-1 items-center">
          <HiArrowCircleUp className="text-gray-500" size={50} />
          <label htmlFor="dropzone-file" className="text-gray-500">
            Upload a file
          </label>
          <input
            onChange={(e) => {
              setfile(e.target.files ? e.target.files[0] : null),
                setselectedFile(e.target.files ? e.target.files[0] : null);
            }}
            type="file"
            id="dropzone-file"
            className="hidden"
          />
        </div>
      )}
    </div>
  );
};

export default UploadPhoto;
