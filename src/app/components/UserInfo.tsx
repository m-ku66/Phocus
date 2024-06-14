import Image from "next/image";
import React from "react";

type UserDataProps = {
  userData: {
    email: string;
    userImage: string;
    userName: string;
  };
};

const UserInfo = (props: UserDataProps) => {
  const { userData } = props;
  console.log("Data passed successfully: ", userData);
  return (
    <div className="mt-[20%] md:mt-[5%] flex flex-col gap-1 items-center">
      <div className="rounded-full w-fit h-fit p-2 bg-gray-300 mb-[10%]">
        <Image
          className="rounded-full"
          src={userData.userImage}
          width={100}
          height={100}
          alt="profile picture"
        />
      </div>
      <h1 className="text-[1.3rem] font-semibold">{`${
        userData.userName ? userData.userName : "anonymous"
      }`}</h1>
      <h2 className="text-[1rem] text-gray-400 mb-5">{userData.email}</h2>
      <button className="font-semibold bg-gray-200 text-gray-500 rounded-full px-4 py-1 hover:text-black hover:bg-gray-300 duration-150">
        Share
      </button>
    </div>
  );
};

export default UserInfo;
