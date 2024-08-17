import { CircleX } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loader from "./loader";
import { apiSignUp } from "../services/auth";
import { useNavigate } from "react-router-dom";


const LoginPop = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  const [userType, setUserType] = useState("Customer");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const navigate = useNavigate()

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });


  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      email: data.email,
      phoneNumber: data.phoneNumber,
      role: data.role,
      businessName: data.businessName, 
      location: data.location,
      address: data.address,
  
    };
    if (data.middleName) {
      payload = { ...payload,
        middleName: data.middleName
       
        };
      }
    
    try {
      const res = await apiSignUp(payload);
      console.log(res.data);
      toast.success(res.data.message);
      navigate("user");
    } catch (error) {
      console.log(error);
      toast.error("An error occured!");
    } finally {
      setIsSubmitting(false);
    }
    
  };


  return (
    <div className="login absolute z-[1] w-[100%] h-[100%] bg-[#00000090] grid">
      <form className="login-container place-self-center text-[#808080] bg-white flex flex-col gap-[15px] rounded-[8px] text-[14px] w-[420px] p-[20px]" onSubmit={handleSubmit(onSubmit)}>
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
                  className="p-[8px] rounded-[4px] border border-[#ddd]"

                  {...register("firstName", { required: "First Name is required" })}
                />
                {errors.firstName && (<p className="text-red-500">{errors.firstName.message}</p>)}
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
                  className="p-[8px] rounded-[4px] border border-[#ddd]"
                  {...register("lastName", { required: "Last Name is required" })}
                />
                 {errors.lastName && (<p className="text-red-500">{errors.lastName.message}</p>)}
                <input
                  type="text"
                  placeholder="Phone number"
                  className="p-[8px] rounded-[4px] border border-[#ddd]"
                  {...register("phoneNumber", { required: "Phone number is required" })}
                />
                 {errors.phoneNumber && (<p className="text-red-500">{errors.phoneNumber.message}</p>)}
              </div>

              <div className="flex items-center gap-[10px]">
                <label htmlFor="userType" className="text-gray-700">
                  Sign up as:
                </label>
                <select
                  id="role"
                  value={userType}
                  onChange={handleUserTypeChange}
                  className="p-[8px] rounded-[4px] border border-[#ddd] outline-none bg-white text-gray-800"
                  
                >
                  <option value="customer">Customer</option>
                  <option value="vendor">Business</option>
                </select>
              </div>

              {userType === "vendor" && (
                <div className="grid grid-cols-2 gap-[10px]">
                  <input
                    type="text"
                    placeholder="Business name"
                    className="col-span-2 p-[8px] rounded-[4px] border border-[#ddd]"
                    {...register("businessName", { required: "Business Name is required" })}
                  />
                   {errors.businessName && (<p className="text-red-500">{errors.businessName.message}</p>)}
                  <input
                    type="text"
                    placeholder="Business location"
                    className="p-[8px] rounded-[4px] border border-[#ddd]"
                    {...register("location", { required: "Business Location is required" })}
                  />
                   {errors.location && (<p className="text-red-500">{errors.location.message}</p>)}
                  <input
                    type="text"
                    placeholder="Business address"
                    className="p-[8px] rounded-[4px] border border-[#ddd]"
                    {...register("address", { required: "Business address is required" })}
                  />
                   {errors.address && (<p className="text-red-500">{errors.address.message}</p>)}
                </div>
              )}
            </>
          )}
          <input
            type="text"
            placeholder="Your email"
            className="w-full p-[8px] rounded-[4px] border border-[#ddd]"
            {...register("email", { required: "email is required" })}
          />
           {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
          <input
            type="password"
            placeholder="Password"
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
             {isSubmitting ? <Loader/> : "Login"} 
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
