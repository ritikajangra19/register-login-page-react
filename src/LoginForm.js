import React, { useState } from "react";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    userID: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Logging in with:", loginData);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md mt-10 mb-6 border border-black">
      <h2 className="text-2xl font-bold text-left mb-6">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div className="form-group">
          <label
            htmlFor="userID"
            className="block text-sm font-medium text-gray-700"
          >
            User ID{" "}
            <span className="text-gray-400 font-normal">(required)</span>
          </label>
          <input
            type="email"
            id="userID"
            name="userID"
            placeholder="Enter your email"
            value={loginData.userID}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#009c76]"
            required
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password{" "}
            <span className="text-gray-400 font-normal">(required)</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#009c76]"
            required
          />
        </div>

        <div className="form-group flex justify-between items-center">
          <label className="text-sm text-gray-400 font-normal">
            {/* <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> */}
            <input
              type="checkbox"
              name="rememberMe"
              checked={loginData.rememberMe}
              onChange={handleChange}
              // className="appearance-none border-2 rounded border-[#009c76] mr-2 w-4 h-4 "
              className="mr-2"
            />
            Remember me
          </label>
          <a href="#" style={{ color: "#009c76" }} className="text-sm">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className=" py-2 px-10 text-lg bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:border-[#009c76] mx-auto block"
          style={{ backgroundColor: "#009c76", border: "none" }}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
