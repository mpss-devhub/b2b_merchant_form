import React, { useEffect, useState } from "react";
import InputField from "../components/ui/InputField";
import { FormProvider } from "react-hook-form";
import { useLoginForm } from "../hooks/useLoginForm";
import logo from "../../public/Octoverse Gateway logo.png";
import { FaExclamationCircle } from "react-icons/fa";

function AdminLogin() {
    const { handleSubmit, response, onSubmit, ...methods } = useLoginForm();
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (response?.access_token) {
            window.location.href = "/admin";
        } else if (response !== null) {
            setShowAlert(true);
            const timer = setTimeout(() => setShowAlert(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [response]);

    return (
        <div className="flex h-screen flex-col justify-center items-center bg-gray-50 px-6">
            {/* Floating alert */}
            {showAlert && (
                <div
                    className="w-full max-w-sm px-4 fixed top-6 left-1/2 transform -translate-x-1/2 animate-fade-in-down z-50"
                    role="alert"
                >
                    <div className="bg-red-100 border border-red-300 rounded-lg text-red-800 px-4 py-3 shadow-md flex gap-3 items-center">
                        <FaExclamationCircle className="text-red-500 text-xl" />
                        <div>
                            <p className="font-semibold">
                                Authorization Failed
                            </p>
                            <p className="text-sm">
                                Invalid credentials. Try again.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Login Card */}
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
                    <img
                        src={logo}
                        alt="Octoverse Logo"
                        className="h-14 md:h-16 w-auto mx-auto mb-4"
                    />
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                        Use your admin credentials to continue
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                    <FormProvider {...methods}>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-5"
                        >
                            <InputField
                                name="email"
                                label="Email"
                                placeholder="you@example.com"
                            />
                            <InputField
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="••••••••"
                            />
                            <button
                                type="submit"
                                className="rounded-lg px-6 py-2.5 bg-red-400 hover:bg-red-500 text-white font-semibold duration-300 w-full shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-1"
                            >
                                Login
                            </button>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
