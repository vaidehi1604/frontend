//server component for useState and useEffect
"use client";

import Link from "next/link";
import { useState } from "react";

const page = async () => {
  //define state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const register = async (e: any) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      mobileNo,
      address,
      profilePic,
    };

    try {
      let result = await fetch("http://localhost:3003/admin/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json", // Set the content type
        },
      });

      if (result.ok) {
        const response = await result.json();
        alert("Successfully Logged In!!");
        console.log(response); // Log the response for debugging
      } else {
        // Handle response error
        console.error("Failed to log in:", result.status, result.statusText);
      }
    } catch (error) {
      // Handle fetch error
      console.error("Fetch error:", error);
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

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  {/* <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Profile Pic
                  </label> */}
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {/* )} */}
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-green-500"
                        >
                          <span className="text-center">Upload a Image</span>
                          <input
                            // onChange={handleInputChange}
                            // files={product?.image || ""}
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={register}
                type="submit"
                className="w-full text-center py-3 rounded bg-cyan-700 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Create Account
              </button>
            </div>

            <div className="text-grey-dark mt-6">
              Already have an account?
              <Link className="text-cyan-700" href="/admin/login">
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
