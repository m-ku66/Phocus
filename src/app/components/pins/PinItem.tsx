"use client";
import React, { useState } from "react";

interface PhotoData {
  author: string;
  authorEmail: string;
  authorImg: string;
  desc: string;
  img: string;
  link: string;
  title: string;
  id: string;
}

interface PinItemProps {
  photo: PhotoData;
}

const PinItem: React.FC<PinItemProps> = ({ photo }) => {
  const { author, authorEmail, authorImg, desc, img, link, title, id } = photo;
  const [popUpState, setpopUpState] = useState();

  const largeDimesions = "md:w-[200px] md:h-[200px]";
  const mobileDimensions = "w-[300px] h-[300px]";

  function handlePhotoPopUp() {}

  return (
    <div
      className={`cursor-pointer ${mobileDimensions} ${largeDimesions} relative m-2 bg-gray-200 p-1 rounded-md`}
    >
      <div
        onClick={() => handlePhotoPopUp()}
        className="absolute w-full h-full bg-transparent hover:bg-gray-300/[0.2] duration-150"
      ></div>
      <img
        src={img}
        alt={title}
        className="rounded-md w-full h-full object-cover"
      />
      {/* create pop up section here */}
    </div>
  );
};

export default PinItem;
