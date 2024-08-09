import React from "react";
import { images } from "../assets/images";
import { Facebook, Twitter, Youtube } from "lucide-react";
import Socials from "./socials";

const Footer = () => {
  return (
    <div className="footer flex text-gray-200 bg-[#323232] flex-col items-center gap-[20px] pt-[80px] mt-[100px]">
      <div className="footerContent w-[100%] grid">
        <div className="footerContentLeft flex flex-col items-start gap-[20px]">
          <img src={images.Logo} alt="Logo" className="h-8 w-[150px] gap-[80px]"/>
          <p>"Craving something delicious? You're just a click away <br/> with MunchMate. Order now and satisfy your taste buds!"</p>
          <div className="socialIcons w-[40px] mr-[15px]">
            <Socials/>
          </div>
        </div>
        <div className="footerContentCenter flex flex-col items-start gap-[20px]">
          <h2 className="text-white">COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footerContentRight flex flex-col items-start gap-[20px]">
          <h2 className="text-white">GET IN TOUCH</h2>
          <ul>
            <li>+233-5431-7890</li>
            <li>contact@munchmate.com</li>
          </ul>
        </div>
      </div>

    <hr className="w-[100%] h-[2px] mx-[20px] my-[0px] border-none bg-gray-500"/>
      <p className="copyright">
        Copyright 2024 @ munchmate.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
