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

    const response = await fetch(
        "http://127.0.0.1:8000/api/merchant",
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
            },
            body: formData,
        }
    );
    console.log("Response status:", response);
    return response.json();
};
