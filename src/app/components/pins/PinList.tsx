"use client";
import React from "react";
import PinItem from "./PinItem";

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

interface ListProps {
  photoList: PhotoData[];
}

const PinList: React.FC<ListProps> = ({ photoList }) => {
  console.log(photoList);
  return (
    <div className="pl-2 md:pl-0 w-full h-full flex gap-1 flex-wrap">
      {photoList.map((photo) => (
        <PinItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PinList;
