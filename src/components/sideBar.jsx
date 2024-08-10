import { CirclePlus, ListCheck, ShoppingCart } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar w-[18%] min-h-[100vh] border-t-0">
      <div className="flex flex-col gap-[20px] pt-[50px] pl-[20%]">
        <NavLink to="add" className="sidebar-option flex items-center gap-[12px] border-r-0 cursor-pointer">
          <CirclePlus/>
          <p>Add Items</p>
        </NavLink>
        <NavLink to="list" className="sidebar-option flex items-center gap-[12px] border-r-0 cursor-pointer">
          <ListCheck/>
          <p>List Items</p>
        </NavLink>
        <NavLink to="orders" className="sidebar-option flex items-center gap-[12px] border-r-0 cursor-pointer">
            <ShoppingCart/>
            <p>Orders</p>

        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
