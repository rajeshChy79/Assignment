import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-300 hover:shadow-lg transition duration-300">
      <div className="flex items-center space-x-4">
        {/* User Avatar */}
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-16 h-16 rounded-full border border-gray-400"
        />

        {/* User Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">
            {user.first_name} {user.last_name}
          </h3>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>

        {/* Action Buttons */}
        <div className="space-x-2">
          <button
            onClick={() => navigate(`/edit/${user.id}`)}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(user.id)}
            className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
