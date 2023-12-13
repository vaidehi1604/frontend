//server component for useState and useEffect
"use client";
import Link from "next/link";
import { MouseEvent, useState } from "react";
// import { useForm } from "react-hook-form";

// import * as yup from "yup";

// const schema = yup.object({
//   email: yup.string().required(),
//   password: yup.string().min(6).required(),
// });

const page = () => {
  // const { handleSubmit, register,formState:{err} } = useForm({
  //   // resolver: yupResolver(schema),
  // });

  // const formSubmit = (data) => {
  //   console.log(data, "data");
  // };
  //define state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
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
      // onSubmit={handleSubmit(formSubmit)}
      >
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-5 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign In</h1>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                id="email"
                placeholder="Email"
                // register={{ ...register("email") }}
              />

              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                id="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                // register={{ ...register("password") }}
              />

              <button
                onClick={login}
                type="submit"
                className="w-full text-center py-3 rounded bg-cyan-700 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Sign In
              </button>
            </div>

            <div className="text-grey-dark mt-6">
              <Link className="text-cyan-700" href="/admin/forgot">
                Forgot password!!
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
