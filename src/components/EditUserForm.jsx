import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast

const EditUserForm = ({ user }) => {
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email) {
      toast.error("Please fill in all fields."); // ✅ Use toast instead of setMessage
      return;
    }

    try {
      await axios.put(`https://reqres.in/api/users/${user.id}`, {
        first_name: firstName,
        last_name: lastName,
        email,
      });

      toast.success("User updated successfully!"); // ✅ Toast for success
      setTimeout(() => navigate("/users"), 1500);
    } catch {
      toast.error("Failed to update user. Please try again."); // ✅ Toast for error
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold text-center mb-4">Edit User</h2>
      
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
