import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import { useState } from "react";

const RootLayout = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}
      <NavBar setShowLogin={setShowLogin}/>
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
