import { CircleX } from "lucide-react";
import React, { useState } from "react";

const LoginPop = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  const [userType, setUserType] = useState("Customer");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  return (
    <div className="login absolute z-[1] w-[100%] h-[100%] bg-[#00000090] grid">
      <form className="login-container place-self-center text-[#808080] bg-white flex flex-col gap-[15px] rounded-[8px] text-[14px] w-[420px] p-[20px]">
        <div className="login-title flex justify-between items-center text-black font-semibold text-[20px]">
          <h2>{currentState}</h2>
          <CircleX
            onClick={() => setShowLogin(false)}
            className="w-[17px] cursor-pointer"
          />
        </div>
        <div className="loginInputs flex flex-col gap-[15px]">
          {currentState === "Sign Up" && (
            <>
              <div className="grid grid-cols-2 gap-[10px]">
                <input
                  type="text"
                  placeholder="First name"
                  required
                  className="p-[8px] rounded-[4px] border border-[#ddd]"
                />
                <input
                  type="text"
                  placeholder="Middle name"
                  className="p-[8px] rounded-[4px] border border-[#ddd]"
                />
              </div>
              <div className="grid grid-cols-2 gap-[10px]">
                <input
                  type="text"
                  placeholder="Last name"
                  required
                  className="p-[8px] rounded-[4px] border border-[#ddd]"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  required
                  className="p-[8px] rounded-[4px] border border-[#ddd]"
                />
              </div>

              <div className="flex items-center gap-[10px]">
                <label htmlFor="userType" className="text-gray-700">
                  Sign up as:
                </label>
                <select
                  id="userType"
                  value={userType}
                  onChange={handleUserTypeChange}
                  className="p-[8px] rounded-[4px] border border-[#ddd] outline-none bg-white text-gray-800"
                >
                  <option value="Customer">Customer</option>
                  <option value="Business">Business</option>
                </select>
              </div>

              {userType === "Business" && (
                <div className="grid grid-cols-2 gap-[10px]">
                  <input
                    type="text"
                    placeholder="Business name"
                    required
                    className="col-span-2 p-[8px] rounded-[4px] border border-[#ddd]"
                  />
                  <input
                    type="text"
                    placeholder="Business location"
                    required
                    className="p-[8px] rounded-[4px] border border-[#ddd]"
                  />
                  <input
                    type="text"
                    placeholder="Business address"
                    required
                    className="p-[8px] rounded-[4px] border border-[#ddd]"
                  />
                </div>
              )}
            </>
          )}
          <input
            type="text"
            placeholder="Your email"
            required
            className="w-full p-[8px] rounded-[4px] border border-[#ddd]"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-[8px] rounded-[4px] border border-[#ddd]"
          />
        </div>
        <button className="border-none p-[10px] rounded-[4px] text-white bg-[#EA7519] text-[15px] cursor-pointer">
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-condition flex items-start gap-[8px]">
          <input type="checkbox" required className="mt-[5px]" />
          <p>By continuing, I agree to the terms and condition</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer text-[#EA7519]"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer text-[#EA7519]"
            >
              Login
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
