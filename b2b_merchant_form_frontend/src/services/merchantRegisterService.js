import { baseUrl } from "../types/urls";

export const merchantRegister = async (data) => {
    const formData = new FormData();
    for (const key in data) {
        if (data[key] instanceof FileList) {
            Array.from(data[key]).forEach((file) => {
                formData.append(key, file);
            });
        } else {
            formData.append(key, data[key]);
        }
    }

    const response = await fetch(`${baseUrl}/api/merchant`, {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
        body: formData,
    });
    return response.json();
};

export const getMerchant = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${baseUrl}/api/merchant`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching merchants:", error.message);
        throw error;
    }
};

export const getMerchantById = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${baseUrl}/api/merchant/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching merchants:", error.message);
        throw error;
    }
};
