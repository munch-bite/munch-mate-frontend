import React from "react";

import UserOrdersTile from "../../components/userOrdersTile";

const UserOrders = () => {
  return (
    <div className="w-full flex flex-col pt-10  mx-2">
      <p className="text-center pb-5 text-[18px] text-gray-900 font-semibold">Orders</p>
      <UserOrdersTile/>
      <UserOrdersTile/>
    </div>
  );
};

export default UserOrders;
