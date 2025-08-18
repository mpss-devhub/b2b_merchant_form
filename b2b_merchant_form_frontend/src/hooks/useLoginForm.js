import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../schemas/loginSchema";
import { loginService } from "../services/loginService";

export const useLoginForm = () => {
    const [response, setResponse] = useState(null);

    const methods = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        try {
            const res = await loginService(data);
            setResponse(res);
            localStorage.setItem("token", res?.access_token || "");
        } catch (error) {
            console.error("Error during login:", error);
            alert("Login failed");
        }
    };

    return { ...methods, onSubmit, response };
};
