import { CircleX } from "lucide-react";
import React, { useState } from "react";

const LoginPop = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login absolute z-[1] w-[100%] h-[100%] bg-[#00000090] grid">
      <form className="login-container place-self-center text-[#808080] bg-white flex flex-col gap-[25px] rounded-[8px] text-[14px]">
        <div className="login-title flex justify-between items-center text-[#EA7519] font-semibold text-[20px]">
          <h2>{currentState}</h2>
          <CircleX onClick={() => setShowLogin(false)} className="w-[17px] cursor-pointer"/>
        </div>
        <div className="loginInputs ">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="text" placeholder="Your email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms and condition</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrentState("Login")}>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
