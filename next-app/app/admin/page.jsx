//server component for useState and useEffect
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import commonApi from "../api/commonApi";

const page = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const router = useRouter();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    // Create a URL for the selected image
    const imageUrl = selectedImage ? URL.createObjectURL(selectedImage) : null;
    setImageUrl(imageUrl); // Set the URL to state
  };

  const uploadImage = async () => {
    if (!image) {
      console.error("No image selected");
      return;
    }

    const formData = new FormData();
    formData.append("profilePic", image);

    try {
      const response = await commonApi({
        method: "post",
        endpoint: "user/uploadProfilePic",
        payload: formData,
      });

      const imageData = response.data;
      const imageId = imageData && imageData._id;

      // Assuming your API returns the file path after successful upload
      console.log("Image uploaded. Image ID:", imageId);

      // Optionally, reset the state after successful upload
      setImage(null);
      setImageUrl(null);

      return imageId;
    } catch (error) {
      console.error("Image upload error:", error);
      throw error;
    }
  };

  const register = async () => {
    try {
      const imageId = await uploadImage();

      const userData = {
        name,
        userName,
        email,
        password,
        mobileNo,
        address,
        profilePic: imageId,
      };
      console.log(userData);
      console.log("User data:", userData);

      const registrationResponse = await commonApi({
        method: "post",
        endpoint: "admin/register",
        payload: userData,
      });

      console.log("Registration Response:", registrationResponse);
      router.push("/");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div>
      <form
      // onSubmit={createValidaton}
      >
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-5 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                id="name"
                placeholder="Enter Your name"
              />
              <input
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                id="name"
                placeholder="Enter Your UserName"
              />

              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />

              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                id="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Enter Your Password"
              />

              <input
                onChange={(e) => setMobileNo(e.target.value)}
                value={mobileNo}
                type="text"
                id="Mobile"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Enter Your Mobile No"
              />

              <input
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                type="text"
                id="Address"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Enter Your Address"
              />

              <div className="block border border-grey-light w-full p-3 rounded mb-4">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="w-full text-center relative cursor-pointer rounded-md bg-white font-semibold text-blue-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-green-500"
                  >
                    <span className="text-center">Upload an Image</span>
                    <input
                      onChange={(e) => handleImageChange(e)}
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>

                {/* Display the uploaded image preview */}
                {imageUrl && (
                  <div className="m-auto mt-4 h-1/2 w-1/2">
                    <img
                      src={imageUrl}
                      alt="Uploaded"
                      className="max-w-full h-auto m-auto"
                    />
                  </div>
                )}

                <button
                  onClick={uploadImage}
                  type="button"
                  className="w-full text-center py-3 rounded bg-gray-100 hover:bg-green-dark focus:outline-none my-1"
                >
                  Upload
                </button>
              </div>

              <button
                onClick={register}
                type="button"
                className="w-full text-center py-3 rounded bg-cyan-700 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Create Account
              </button>
            </div>

            <div className="text-grey-dark mt-6">
              Already have an account?
              <Link className="text-cyan-700" href="/">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
