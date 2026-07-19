import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdSearch, MdInventory, MdWarning, MdCategory } from "react-icons/md";

const Home = () => {
  const [products, setProducts] = useState([]);

  // Get Products
  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const totalProducts = products.length;

  const totalCategories = new Set(products.map((product) => product.category))
    .size;

  const lowStock = products.filter((product) => product.quantity < 5).length;

  return (
    <div className="bg-gray-100 h-146 w-full p-4 rounded-2xl">
      {/* Header */}
      <div className="flex justify-between mb-4  items-center ">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Inventory Dashboard
          </h1>

          <p className="text-gray-500">
            Welcome to Inventory Management System
          </p>
        </div>

        <div className="flex items-center bg-white rounded-lg shadow px-4 py-2">
          <MdSearch className="text-gray-500 text-xl" />

          <input
            type="text"
            placeholder="Search..."
            className="outline-none ml-2"
          />
        </div>
      </div>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Total Products */}

        <div className="bg-white rounded-xl shadow p-6">
          <MdInventory className="text-5xl text-blue-600 mb-3" />

          <h2 className="text-lg font-semibold">Total Products</h2>

          <p className="text-3xl font-bold mt-2">{totalProducts}</p>
        </div>

        {/* Categories */}

        <div className="bg-white rounded-xl shadow p-6">
          <MdCategory className="text-5xl text-green-600 mb-3" />

          <h2 className="text-lg font-semibold">Categories</h2>

          <p className="text-3xl font-bold mt-2">{totalCategories}</p>
        </div>

        {/* Low Stock */}

        <div className="bg-white rounded-xl shadow p-6">
          <MdWarning className="text-5xl text-red-500 mb-3" />

          <h2 className="text-lg font-semibold">Low Stock</h2>

          <p className="text-3xl font-bold mt-2">{lowStock}</p>
        </div>
      </div>

      {/* Recent Products */}

      <div className="bg-gray-300 rounded-xl shadow p-6 text-black">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">Recent Products</h2>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            + Add Product
          </button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="py-3">Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id} className="border-b">
                  <td className="py-4">{product.name}</td>

                  <td>{product.category}</td>

                  <td>₹{product.price}</td>

                  <td>{product.quantity}</td>

                  <td>
                    {product.quantity < 5 ? (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                        Low Stock
                      </span>
                    ) : (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        In Stock
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No Products Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
