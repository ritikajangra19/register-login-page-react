import React, { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    userID: "",
    password: "",
    rememberMe: false,
  });

  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
    console.log("Registered with:", formData);
    setIsRegistered(true);
  };

  if (isRegistered) {
    return <LoginForm />;
  }

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md mt-10 mb-6 border border-black">
      <h2 className="text-2xl font-semibold text-left mb-6">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#009c76]"
            required
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#009c76]"
            required
          />
        </div>

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
            value={formData.userID}
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
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#009c76]"
            required
          />
        </div>

        <div className="form-group flex justify-between items-center">
          <label className="text-sm text-gray-400 font-normal">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2 custom-checkbox"
            />
            Remember me
          </label>
          <a href="#" style={{ color: "#009c76" }} className="text-sm">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className=" py-2 px-7 text-lg bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:border-[#009c76] mx-auto block"
          style={{ backgroundColor: "#009c76", border: "none" }}
        >
          Create an account
        </button>

        <p className="mt-4 text-center text-gray-500 text-sm">
          By creating an account, I agree to your{" "}
          <a
            href="/terms-of-use"
            style={{ color: "#009c76" }}
            className="text-500 font-bold"
          >
            terms of use
          </a>{" "}
          and{" "}
          <a
            href="/terms-of-use"
            style={{ color: "#009c76" }}
            className="text-500 font-bold"
          >
            privacy policy
          </a>
        </p>
      </form>
    </div>
  );
};

export default MyForm;
