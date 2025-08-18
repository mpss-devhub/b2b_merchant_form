import { baseUrl } from "../types/urls";

export const loginService = async (data) => {
    try {
        const response = await fetch(`${baseUrl}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};

export const checkTokenService = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/auth/me`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Token check error:", error);
        throw error;
    }
};
