"use client";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import app from "../shared/firebaseConfig";
import UserInfo from "../components/UserInfo";
import { useRouter, useSearchParams } from "next/navigation";

const Profile = ({ params }: { params: { userId: string } }) => {
  const db = getFirestore(app);
  const userId = params?.userId;
  const [userData, setUserData] = useState<Record<string, any> | null>(null); // setting inital state for an object that houses strings
  const router = useRouter();

  useEffect(() => {
    if (userId) {
      getUserInfo(userId);
    }
  }, [userId]);

  const getUserInfo = async (userId: string) => {
    try {
      const docRef = doc(db, "user", userId.replace("%40", "@"));
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      router.push("/");
    }
  };

  return (
    <div className="container max-w-full h-screen flex flex-col px-8 items-center bg-slate-200">
      {userData ? <UserInfo userData={userData} /> : "Loading..."}
      {`Hello there, ${
        userId ? userId.replace("%40gmail.com", "") : "anonymous"
      }!`}
    </div>
  );
};

export default Profile;
