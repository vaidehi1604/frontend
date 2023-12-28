//server component for useState and useEffect
"use client";
import Link from "next/link";
import { useState } from "react";
import commonApi from "./api/commonApi";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Move this line outside the login function

  const login = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    console.log(data);

    try {
      const response = await commonApi({
        method: "post",
        endpoint: "admin/login",
        payload: data,
      });

      alert("Successfully login!!");
      console.log(response);
      router.push("/users");
    } catch (error) {
      console.error("Login failed:", error);
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

            <div className="text-grey-dark mt-6 flex">
              <h4 className="mr-8">
                <Link className="text-cyan-700" href="/admin/forgot">
                  Forgot password
                </Link>
              </h4>
              <h4>
                <Link className="text-cyan-700" href="/admin/">
                  Create Account
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
