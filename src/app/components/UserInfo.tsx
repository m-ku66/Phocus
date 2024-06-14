import React from "react";

type UserDataProps = {
  userData: object;
};

const UserInfo = (props: UserDataProps) => {
  const { userData } = props;
  console.log("Data passed successfully: ", userData);
  return <div>UserInfo</div>;
};

export default UserInfo;
