import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { merchantRegisterSchema } from "../schemas/merchantRegisterSchema";
import { merchantRegister } from "../services/merchantRegisterService";
import { useState } from "react";

export const useMerchantRegisterForm = () => {
    const methods = useForm({
        resolver: zodResolver(merchantRegisterSchema),
    });

    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const onSubmit = async (data) => {
        setError(false);
        setLoading(true);
        try {
            const response = await merchantRegister(data);
            if (response?.message === "Merchant registered successfully") {
                setShow(true);
                setMessage("Merchant registered successfully.");
            } else if (
                response?.message ===
                "Validation failed: Merchant with this name already exists."
            ) {
                setShow(true);
                setError(true);
                setMessage("Merchant with this name already exists.");
            } else {
                setShow(true);
                setError(true);
                setMessage("Merchant registration failed.");
            }
        } catch (error) {
            setShow(true);
            setError(true);
            setMessage("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return { ...methods, onSubmit, loading, show, message };
};
