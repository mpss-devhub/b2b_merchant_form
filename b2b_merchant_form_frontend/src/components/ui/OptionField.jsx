import React from "react";

const OptionField = ({
    label,
    name,
    options = [],
    type = "radio",
    register,
    required = false,
    error,
}) => {
    return (
        <div className="mb-5">
            {label && (
                <p className="block mb-2 font-medium text-gray-700">{label}</p>
            )}

            <div className="flex flex-wrap gap-6">
                {options.map((option, idx) => (
                    <label
                        key={idx}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <input
                            type={type}
                            value={option.value}
                            {...register(name, { required })}
                            className={`h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded`}
                        />
                        <span className="text-gray-800">{option.label}</span>
                    </label>
                ))}
            </div>

            {error && (
                <p className="text-sm text-red-500 mt-1">{error.message}</p>
            )}
        </div>
    );
};

export default OptionField;
