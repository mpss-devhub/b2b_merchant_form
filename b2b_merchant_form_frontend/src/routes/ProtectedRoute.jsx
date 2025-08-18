import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { checkTokenService } from "../services/loginService";

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const user = await checkTokenService();
                if (user && user.id) {
                    setAuthenticated(true);
                } else {
                    localStorage.removeItem("token");
                    setAuthenticated(false);
                }
            } catch (error) {
                localStorage.removeItem("token");
                setAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };
        verifyUser();
    }, []);

    if (loading) return <div>Loading...</div>;

    return authenticated ? (
        children
    ) : (
        <Navigate to="/admin/login" replace state={{ from: location }} />
    );
};

export default ProtectedRoute;
