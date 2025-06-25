import React from "react";

const InputField = ({
    label,
    name,
    type = "text",
    register,
    required,
    error,
    placeholder = "",
    accept,
    onChange,
}) => {
    const isFileInput = type === "file";

    return (
        <div className="mb-5">
            {label && (
                <label
                    htmlFor={name}
                    className="block mb-1 font-medium text-gray-700"
                >
                    {label}
                </label>
            )}

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                accept={isFileInput ? accept : undefined}
                {...(isFileInput
                    ? {
                          onChange: (e) => {
                              onChange?.(e);
                          },
                      }
                    : register(name, { required }))}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    error
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-400"
                } ${
                    isFileInput
                        ? "file:bg-gray-200 file:text-gray-800 file:font-normal file:border-none file:px-4 file:py-1 file:mr-3 file:rounded-md"
                        : ""
                }`}
            />

            {error && (
                <p className="text-sm text-red-500 mt-1">{error.message}</p>
            )}
        </div>
    );
};

export default InputField;
