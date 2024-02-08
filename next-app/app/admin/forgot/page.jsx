"use client";
import Link from "next/link";
import { useRouter } from "next-router-mock";
import { useState } from "react";
import commonApi from "@/app/api/commonApi";

const page = () => {
  const router = useRouter();
  const { email = "" } = router.query || {};
  console.log(email, "email");

  const [otp, setOtp] = useState("");

  const forgotPassword = async (e) => {
    e.preventDefault();
    const data = {
      otp,
      email: email,
    };

    try {
      const response = await commonApi({
        method: "post",
        endpoint: "admin/checkotp",
        payload: data,
      });

      alert("Successfully login!!");
      console.log(response);
      router.push("/admin/reset", { query: { otp } });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <form>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-5 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Enter Your Email</h1>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />

              <button
                onClick={forgotPassword}
                type="submit"
                className="w-full text-center py-3 rounded bg-cyan-700 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Verify Email
              </button>
            </div>

            <div className="text-grey-dark mt-6">
              <Link href="/admin/otp">Sign in</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
