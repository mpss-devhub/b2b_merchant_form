import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("token");
        navigate("/admin/login", { replace: true });
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link
                        to={"/admin"}
                        className="text-xl font-semibold text-red-400"
                    >
                        Merchant Admin
                    </Link>
                    <button
                        className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-md pointer"
                        onClick={handleLogOut}
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
