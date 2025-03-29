import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EditUserForm from "../components/EditUserForm";
import { toast } from "react-toastify";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(response.data.data);
        setError(""); // Clear previous error
      } catch (error) {
        console.error("Error fetching user:", error);
        setError("Failed to fetch user. Please try again.");
        setUser(null);
        toast.error("Failed to fetch user. Please try again."); // ✅ Toast should trigger
      }
    };

    fetchUser();
  }, [id]);

  // Success handler
  const handleSuccess = (message) => {
    console.log("Success Toast Triggered:", message);
    toast.success(message);
  };

  // Error handler
  const handleError = (message) => {
    console.log("Error Toast Triggered:", message);
    toast.error(message);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : !user ? (
        <p className="text-gray-700">Loading...</p>
      ) : (
        <EditUserForm user={user} onSuccess={handleSuccess} onError={handleError} />
      )}
    </div>
  );
};

export default EditUser;
