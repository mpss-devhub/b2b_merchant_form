import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { merchantRegisterSchema } from "../schemas/merchantRegisterSchema";
import { merchantRegister } from "../services/merchantRegisterService";

export const useMerchantRegisterForm = () => {
    const methods = useForm({
        resolver: zodResolver(merchantRegisterSchema),
    });

    const onSubmit = async (data) => {
        try {
            console.log(data);
            await merchantRegister(data);
            alert("Process created successfully");
        } catch (error) {
            console.error("Error submitting process:", error);
            alert("Something went wrong");
        }
    };

    return { ...methods, onSubmit };
};
