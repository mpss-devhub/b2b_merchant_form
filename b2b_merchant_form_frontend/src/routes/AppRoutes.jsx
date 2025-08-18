import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicMerchantRegister from "../pages/PublicMerchantRegister";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import ProtectedRoute from "./ProtectedRoute";
import MerchantDetail from "../pages/MerchantDetail";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PublicMerchantRegister />}></Route>
                <Route path="/admin/login" element={<AdminLogin />}></Route>
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                ></Route>
                <Route
                    path="/admin/merchant/:id"
                    element={
                        <ProtectedRoute>
                            <MerchantDetail />
                        </ProtectedRoute>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
