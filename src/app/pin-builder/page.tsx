"use client";
import React, { useState } from "react";
import UploadPhoto from "../components/UploadPhoto";
import { useSession } from "next-auth/react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import app from "../shared/firebaseConfig";
import { useRouter } from "next/navigation";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const PinBuilder = () => {
  const { data: session } = useSession();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [link, setlink] = useState("");
  const [file, setfile] = useState<File | null>(null);
  const router = useRouter();

  const storage = getStorage(app);
  const db = getFirestore(app);
  const postId = Date.now().toString();

  function onSave() {
    console.log(
      `The saved photo's title is "${title}", description is "${description}", destination link is ${link}, and file is ${file}}`
    );
    uploadFile();
  }

  function uploadFile() {
    const storageReference = ref(storage, "phocus/" + file?.name);
    file
      ? uploadBytes(storageReference, file)
          .then((snapshot) => {
            console.log("File uploaded: ", snapshot);
            router.push("/" + session?.user?.email); // send user back to profile after upload
          })
          .then((resp) => {
            getDownloadURL(storageReference).then(async (url) => {
              console.log("Download link: ", url);
              const postData = {
                title: title,
                desc: description,
                link: link,
                img: url,
                author: session?.user?.name,
                authorEmail: session?.user?.email,
                authorImg: session?.user?.image,
                id: postId,
              };
              await setDoc(doc(db, "posts", postId), postData); // this uploads the post data to the database
            });
          })
      : alert("error uploading bytes!");
  }

  return (
    <div className="container max-w-full h-screen flex flex-col px-8 bg-transparent">
      <div className="flex flex-col mt-10 md:mt-0 md:flex-row gap-10 w-full h-full pb-10 items-center md:justify-center">
        <div className="flex flex-col bg-transparent items-center md:justify-center gap-5">
          <UploadPhoto setfile={setfile} />
          <hr />
          <button className="font-semibold bg-gray-200 text-gray-500 rounded-full px-4 py-1 hover:text-black hover:bg-gray-300 duration-150">
            Save from URL
          </button>
        </div>
        <div className="flex flex-col bg-transparent gap-10 w-full md:w-[50%]">
          <div className="flex flex-col gap-1">
            <input
              onChange={(e) => settitle(e.target.value)}
              maxLength={50}
              className="w-full outline-none mb-3 md:mb-0 text-center md:text-left font-semibold text-[2.5rem]"
              type="text"
              placeholder="Give your photo a name"
            />
            <hr />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[1.2rem] text-gray-500">Description</h1>
            <textarea
              onChange={(e) => setdescription(e.target.value)}
              rows={5}
              placeholder="What's your photo about?"
              className="p-1 resize-none w-full outline outline-1 outline-gray-200 text-gray-400"
            />
          </div>
          <div className="mb-10 md:mb-0">
            <h1 className="text-[1.2rem] text-gray-500">Link</h1>
            <input
              onChange={(e) => setlink(e.target.value)}
              className="w-full outline-none text-gray-400"
              type="text"
              placeholder="Destination link"
            />
            <hr className="mb-[5%]" />
            <div className="flex justify-center md:justify-end w-full">
              <button
                onClick={() => onSave()}
                className="bg-black text-white rounded-full px-4 py-1"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinBuilder;
