import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Users from "./components/Users";
const App = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",

  });
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);


  const changesHandeler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };


  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);

    const isEmailRegistered = users.some((user) => user.email === formData.email);
    if (isEmailRegistered) {
      setError("This email is already registered");
      return;
    }
    
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (!formData.email.indexOf('@')) {
      setError("Email must contain @");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!/[!@#$%^&*?.,:"+_)(]/.test(formData.password)) {
      setError("Password must contain at least one special character");
      return;
    }

    if (!/[A-Z]/.test(formData.password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(formData.password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    if (!/[0-9]/.test(formData.password)) {
      setError("Password must contain at least one number");
      return;
    }

    const newUser = { name: formData.name, email: formData.email, password: formData.password };
    setUsers([...users, newUser]);

    // Clear the input fields
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setError("");
    toast("Login Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white rounded-2xl p-8 shadow-2xl w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>
        <form
          onSubmit={submitHandler}
          action=""
          className="flex flex-col space-y-4"
        >
          <div className="space-y-2">
            <label htmlFor="Name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="Name"
              required
              value={formData.name}
              onChange={changesHandeler}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="Email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="Email"
              required
              value={formData.email}
              onChange={changesHandeler}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="Password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="Password"
              required
              value={formData.password}
              onChange={changesHandeler}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="ConfirmPassword"
              className="text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="ConfirmPassword"
              required
              value={formData.confirmPassword}
              onChange={changesHandeler}
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 font-medium mt-4"
          >
            Sign Up
          </button>
        </form>
        <div className="text-xs text-gray-500 mt-4 text-center">
          <p>By registering, you agree to our</p>
          <a href="" className="text-blue-600 underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="" className="text-blue-600 underline">
            Privacy Policy
          </a>
          .
        </div>
        <ToastContainer />
      </div>
      <Users users={users} deleteUser={deleteUser} />
    </div>
  );
};
export default App;
