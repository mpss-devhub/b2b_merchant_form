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
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await merchantRegister(data);
            if (response?.message === "Merchant registered successfully") {
                setSuccess(true);
                setMessage("Merchant registered successfully.");
            }
        } catch (error) {
            setSuccess(true);
            setMessage("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return { ...methods, onSubmit, loading, success, message };
};
