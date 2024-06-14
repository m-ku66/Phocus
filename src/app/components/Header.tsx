"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineSearch, HiBell, HiChat, HiUser } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import app from "./../shared/firebaseConfig";
import { useRouter } from "next/navigation";

const Header = () => {
  const { data: session } = useSession(); // let's us know wheter or not user is signed in. Session contains user info like pfp
  console.log(session ? session : "Nobody is logged in at the moment..."); // check the session information(user info)
  const userImage = session?.user?.image || "/phocus_logo.png"; // Provide a default image URL
  const [profileMenuState, setprofileMenuState] = useState("hidden");

  const router = useRouter();
  const db = getFirestore(app);

  // whenever the session changes, call saveUserInfo
  useEffect(() => {
    saveUserInfo();
  }, [session]);

  const userEmail = session?.user?.email || "emailError";
  const saveUserInfo = async () => {
    if (session?.user) {
      try {
        await setDoc(doc(db, "user", userEmail), {
          userName: session.user.name || "nameError",
          email: userEmail,
          userImage: session.user.image || "imageError",
        });
      } catch (error) {
        console.error("Error saving user info:", error);
      }
    }
  };

  function handleProfileMenu() {
    if (profileMenuState === "hidden") {
      setprofileMenuState(
        "duration-500 absolute z-[10] right-[1%] top-[110%] w-fit h-fit bg-white"
      );
    } else if (
      profileMenuState ===
      "duration-500 absolute z-[10] right-[1%] top-[110%] w-fit h-fit bg-white"
    ) {
      setprofileMenuState("hidden");
    }
  }

  return (
    <div className="relative flex items-center gap-5 md:gap-7 px-8 py-2 w-full">
      {/* logo image */}
      <Image
        src={"/phocus_logo.svg"}
        alt="site logo"
        width={36}
        height={36}
        className="m-1 cursor-pointer rounded-full hover:bg-gray-300 duration-150"
      />

      {/* home and create buttons */}
      <button
        onClick={() => router.push("/")}
        className="hidden md:block bg-black text-white rounded-full px-4 py-1"
      >
        Home
      </button>
      <button className="text-gray-500 hover:text-black rounded-full px-4 py-1 font-semibold duration-150">
        Create
      </button>

      {/* search bar */}
      <div className="p-2 rounded-full flex items-center gap-2 w-full h-fit bg-gray-200 hover:bg-gray-300 focus-within:bg-gray-300 duration-100">
        <HiOutlineSearch size={24} className="text-gray-500" />
        <input
          className="bg-transparent hidden md:block w-full outline-none"
          type="text"
          placeholder="Look for stuff here..."
        />
      </div>

      {/* notification, chat, and profile icons */}
      <div className="cursor-pointer rounded-full px-3 py-2 bg-white hover:bg-gray-200 duration-500">
        <HiBell size={24} className="text-gray-500" />
      </div>
      <div className="cursor-pointer rounded-full px-3 py-2 bg-white hover:bg-gray-200 duration-500">
        <HiChat size={24} className="text-gray-500" />
      </div>
      <div
        onClick={() => handleProfileMenu()}
        className="cursor-pointer rounded-full px-3 py-2 bg-white hover:bg-gray-200 duration-500"
      >
        {session?.user ? (
          <div className="rounded-full outline outline-1 outline-gray-300">
            <Image
              src={userImage}
              width={40}
              height={40}
              alt="Profile picture"
              className="rounded-full"
            />
          </div>
        ) : (
          <HiUser size={24} className="text-gray-500" />
        )}
      </div>

      {/* profile menu */}
      <div className={profileMenuState}>
        <ul className="flex flex-col gap-1 py-5 pr-10">
          <li
            onClick={() => router.push("/" + session?.user?.email)}
            className={
              session?.user
                ? "select-none text-gray-500 hover:text-black rounded-full px-4 py-1 font-semibold duration-150"
                : "hidden"
            }
          >
            Profile
          </li>
          <li className="select-none text-gray-500 hover:text-black rounded-full px-4 py-1 font-semibold duration-150">
            About Phocus App
          </li>
          <li className="select-none text-gray-500 hover:text-black rounded-full px-4 py-1 font-semibold duration-150">
            Privacy Policy
          </li>
          <li className="select-none text-gray-500 hover:text-black rounded-full px-4 py-1 font-semibold duration-150">
            <Link href={"https://github.com/m-ku66"} target="_blank">
              Developer Github
            </Link>
          </li>
          <li>
            <button
              className="select-none text-gray-500 hover:text-black rounded-full px-4 py-1 font-semibold duration-150"
              onClick={
                session?.user
                  ? () => signOut({ callbackUrl: "/" })
                  : () => signIn()
              }
            >
              {session?.user ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
