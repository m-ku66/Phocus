"use client";
import {
  doc,
  getDoc,
  getFirestore,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import app from "../shared/firebaseConfig";
import UserInfo from "../components/UserInfo";
import { useRouter } from "next/navigation";
import PinList from "../components/pins/PinList";

interface UserData {
  email: string;
  userImage: string;
  userName: string;
}

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

const Profile = ({ params }: { params: { userId: string } }) => {
  const db = getFirestore(app);
  const userId = params?.userId;
  const [userData, setUserData] = useState<UserData | null>(null); // setting initial state for an object that houses strings
  const [photoList, setphotoList] = useState<PhotoData[]>([]);
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
        const data = docSnap.data() as UserData; // Type assertion
        setUserData(data);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      router.push("/");
    }
  };
  //
  useEffect(() => {
    userData ? getUserPins() : console.log("Pin fetching error...");
  }, [userData]);

  // fetch pins from the database that have matching author/email properties as the current user
  async function getUserPins() {
    try {
      const q = query(
        collection(db, "posts"),
        where("authorEmail", "==", userData?.email)
      );

      const querySnapshot = await getDocs(q);
      const photos: PhotoData[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data) {
          const photoData: PhotoData = {
            id: doc.id,
            author: data.author,
            authorEmail: data.authorEmail,
            authorImg: data.authorImg,
            desc: data.desc,
            img: data.img,
            link: data.link,
            title: data.title,
          };
          photos.push(photoData);
        }
      });
      setphotoList(photos);
    } catch (error) {
      console.error("Error fetching user pins:", error);
    }
  }

  return (
    <div className="container max-w-full h-screen flex flex-col px-8 items-center bg-transparent">
      {userData ? <UserInfo userData={userData} /> : "Loading..."}
      <div className="w-full h-full flex gap-1 flex-wrap">
        {userData ? <PinList photoList={photoList} /> : "Loading..."}
      </div>
    </div>
  );
};

export default Profile;
