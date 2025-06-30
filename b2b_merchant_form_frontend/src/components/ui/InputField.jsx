import React from "react";
import { useFormContext } from "react-hook-form";

const InputField = ({
    label,
    name,
    type = "text",
    required,
    placeholder = "",
    accept,
    onChange,
}) => {
    const isFileInput = type === "file";
    const {
        register,
        formState: { errors },
    } = useFormContext();

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
                          ...register(name, { required }),
                          onChange: (e) => {
                              register(name).onChange(e);
                              onChange?.(e);
                          },
                      }
                    : register(name, { required }))}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors[name]
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-400"
                } ${
                    isFileInput
                        ? "file:bg-gray-200 file:text-gray-800 file:font-normal file:border-none file:px-4 file:py-1 file:mr-3 file:rounded-md"
                        : ""
                }`}
            />

            {errors[name] && (
                <p className="text-sm text-red-500 mt-1">
                    {errors[name].message}
                </p>
            )}
        </div>
    );
};

export default InputField;
