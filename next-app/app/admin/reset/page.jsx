"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const router = useRouter(); // Import the useRouter hook
  const { otp } = router.query || {};
  console.log(otp);
  const reset = async (e) => {
    e.preventDefault();

    const data = {
      otp,
      oldPassword,
      newPassword,
    };
    useEffect(() => {
      console.log("OTP:", otp);
    }, [otp]);
    try {
      let result = await fetch("http://localhost:3003/admin/reset", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result.ok) {
        const response = await result.json();
        alert("Password reset successful!!");
        console.log(response);

        // Redirect to another page after successful password reset
        router.push("/admin");
      } else {
        console.error(
          "Failed to reset password:",
          result.status,
          result.statusText
        );
      }
    } catch (error) {
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
              <h1 className="mb-8 text-3xl text-center">Reset Your Password</h1>
              <input
                onChange={(e) => setOldPassword(e.target.value)}
                value={oldPassword}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="Old Password"
                id="Old Password"
                placeholder="Old Password"
              />

              <input
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="New Password"
                id="New Password"
                placeholder="New Password"
              />

              <button
                onClick={reset}
                type="submit"
                className="w-full text-center py-3 rounded bg-cyan-700 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Create Account
              </button>
            </div>

            <div className="text-grey-dark mt-6">
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
