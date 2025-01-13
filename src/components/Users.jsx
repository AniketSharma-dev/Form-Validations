import React from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Users = ({ users, deleteUser }) => {
    const handleDelete = (index) => {
        // Delete user
        deleteUser(index);

        // Show toast notification
        toast.success("User Deleted Successfully!", {
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
        <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Registered Users
            </h3>
            {users && users.length === 0 ? (
                <p className="text-gray-600">No users registered yet.</p>
            ) : (
                users.map((user, index) => (
                    <div
                        key={index}
                        className="w-52 border-b border-gray-200 py-2 flex justify-center items-center"
                    >
                        <div className="w-full">
                            <p className="text-gray-800 font-medium">{user.name}</p>
                            <p className="text-gray-600 text-sm">{user.email}</p>
                            <p className="text-gray-600 text-sm">{user.password}</p>
                        </div>
                        <button
                            onClick={() => handleDelete(index)}
                            className="bg-red-500 rounded py-1 px-2 font-bold h-10"
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Users;
