import Link from "next/link";
import React from "react";

const page = () => {
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
                //   onChange={(e) => setUsername(e.target.value)}
                //   value={username}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="Old Password"
                id="Old Password"
                placeholder="Old Password"
              />

              <input
                //   onChange={(e) => setEmail(e.target.value)}
                //   value={email}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="New Password"
                id="New Password"
                placeholder="New Password"
              />

              <button
                //   onClick={createUser}
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
