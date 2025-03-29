import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // ✅ Import toast

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { logout } = useAuth();
  const navigate = useNavigate();

  // Fetch Users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
      } catch {
        toast.error("Failed to fetch users."); // ✅ Show error toast on failure
      }
    };
    fetchUsers();
  }, [page]);

  // Handle User Deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      toast.success("User deleted successfully!"); // ✅ Show success toast
    } catch {
      toast.error("Failed to delete user."); // ✅ Show error toast
    }
  };

  // Handle Logout
  const handleLogout = () => {
    logout();
    toast.info("Logged out successfully!"); // ✅ Show logout toast
    setTimeout(() => navigate("/"), 1000); // ✅ Redirect after toast
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users List</h1>
        <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
          Logout
        </button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded-md"
      />

      {/* Users List */}
      <div className="space-y-4">
        {users
          .filter((user) => `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((user) => (
            <UserCard key={user.id} user={user} onDelete={handleDelete} />
          ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-4 mt-6">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1} className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50">
          Previous
        </button>
        <span className="text-gray-800">Page {page} of {totalPages}</span>
        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages} className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
