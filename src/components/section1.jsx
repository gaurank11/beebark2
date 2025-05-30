import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterNowSection = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  const navigate = useNavigate();

  const handleAvailNow = () => {
    navigate("/register");
  };

  useEffect(() => {
    // Set a fixed date, for example 15 days from initial launch
    const fixedTargetDate = new Date("2025-06-04T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diffTime = fixedTargetDate - now;
      const diffDays = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);
      setDaysLeft(diffDays);
    };

    updateCountdown(); // run once immediately

    const timer = setInterval(updateCountdown, 1000 * 60 * 60); // update hourly

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#221912] text-white py-16 flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-yellow-500 text-4xl md:text-6xl font-extrabold mb-4">
        REGISTER NOW !!
      </h2>

      <p className="text-lg md:text-2xl text-white mb-6">
        Unlock{" "}
        <span className="text-yellow-500 font-bold underline decoration-green-500">
          ₹4,10,000
        </span>{" "}
        worth of premium services.
      </p>

      {/* Container for Days Left and Button */}
     <div className="flex flex-col items-center">
  <div className="text-yellow-400 font-bold text-xl py-3 -ml-2 md:-ml-4"> {/* Added negative margin */}
    ⏳ {daysLeft} Days Left
  </div>
  <button
    onClick={handleAvailNow}
    className="mt-4 px-8 py-3 text-lg font-semibold bg-white text-[#221912] border-2 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition"
  >
    Register Now
  </button>
</div>
    </section>
  );
};

export default RegisterNowSection;