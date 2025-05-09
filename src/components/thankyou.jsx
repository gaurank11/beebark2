import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const Thankyou = () => {
    const location = useLocation();
    const firstname = location.state?.firstname | "";

  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-120">
        <div className="bg-gray-50 h-60 flex items-center justify-center">
          <img
            src="/thankyou.png" // Placeholder illustration
            alt="Illustration"
            className="h-56"
          />
        </div>
        <div className="p-6 ">
          <h3 className="text-lg font-medium text-black">Hi User,</h3>
          <h2 className="text-2xl font-bold my-2 text-black">Thanks You!</h2>
          <p className="text-gray-600 text-sm md:text-md mb-4">
            Thank you for subscribing to Beebark! We're so excited to welcome
            you as a Beebark Premium user.
          </p>
          <button
      onClick={handleLoginRedirect}
      className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full w-full hover:bg-yellow-500"
    >
      You have confirmed your email, Now Login
    </button>
        </div>
        <div className="bg-black text-center py-4">
          <p className="text-white text-sm">Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-white hover:text-gray-200 text-lg">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-200 text-lg">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-200 text-lg">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
