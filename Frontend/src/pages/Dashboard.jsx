import React from "react";
import {
  MdInventory,
  MdCategory,
  MdWarning,
  MdAttachMoney,
} from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 h-148 w-full rounded-2xl p-8 text-black ">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <MdInventory className="text-5xl text-blue-600 mb-3" />
          <h2 className="font-semibold">Products</h2>
          <p className="text-3xl font-bold mt-2">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <MdCategory className="text-5xl text-green-600 mb-3" />
          <h2 className="font-semibold">Categories</h2>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <MdWarning className="text-5xl text-red-500 mb-3" />
          <h2 className="font-semibold">Low Stock</h2>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <MdAttachMoney className="text-5xl text-yellow-500 mb-3" />
          <h2 className="font-semibold">Inventory Value</h2>
          <p className="text-3xl font-bold mt-2">₹2.5L</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
