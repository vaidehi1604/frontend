"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import commonApi from "@/app/api/commonApi";
const OneMinuteTimer = () => {
  const [seconds, setSeconds] = useState(60);
  const [displayTime, setDisplayTime] = useState("01:00");

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        setDisplayTime(
          `${minutes.toString().padStart(2, "0")}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`
        );
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
        setDisplayTime("00:00"); // Set display time to "00:00" after one minute
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  return <p>Time Remaining: {displayTime}</p>;
};

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
              <h1 className="mb-8 text-3xl text-center">Enter Your OTP!</h1>
              <input
                onChange={(e) => setOtp(e.target.value)}
                value={otp}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="otp"
                id="otp"
                placeholder="Enter OTP"
              />
              <OneMinuteTimer />
              <button
                onClick={forgotPassword}
                type="submit"
                className="w-full text-center py-3 rounded bg-cyan-700 text-white hover-bg-green-dark focus:outline-none my-1"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
