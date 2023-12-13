"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { forgot } from "@/redux/feature/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const page = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
const dispatch=useDispatch();
  const forgot = async (e) => {
    e.preventDefault();
    const data = {
      email,
    };

    // await router.push(`/admin/otp?email=${encodeURIComponent(email)}`);
    // try {
    //   let result = await fetch("http://localhost:3003/admin/forgotpassword", {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   if (result.ok) {
    //     const response = await result.json();
    //     router.push("/admin/reset"); // Use router.push to navigate to "/admin/reset"
    //     toast.success("Successfully Sign In!");
    //     console.log(response);
    //     router.push("/admin/otp");
    //   } else {
    //     console.error(
    //       "Failed to Received OTP:",
    //       result.status,
    //       result.statusText
    //     );
    //   }
    // } catch (error) {
    //   console.error("Fetch error:", error);
    // }
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
                onClick={forgot}
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
