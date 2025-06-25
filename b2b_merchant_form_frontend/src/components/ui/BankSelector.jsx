import React, { useEffect, useState } from "react";

const BankSelector = ({ register }) => {
    const [selectedBanks, setSelectedBanks] = useState([]);
    const [bankList, setBankList] = useState([]);

    const allSelected =
        bankList.length > 0 && selectedBanks.length === bankList.length;

    const handleSelect = (payment_name) => {
        setSelectedBanks((prevSelected) =>
            prevSelected.includes(payment_name)
                ? prevSelected.filter((name) => name !== payment_name)
                : [...prevSelected, payment_name]
        );
    };

    const toggleSelectAll = () => {
        if (allSelected) {
            setSelectedBanks([]);
        } else {
            setSelectedBanks(bankList.map((bank) => bank.payment_name));
        }
    };

    useEffect(() => {
        const fetchBanks = async () => {
            try {
                const response = await fetch(
                    "http://127.0.0.1:8000/api/payments",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch bank data");
                }

                const data = await response.json();
                setBankList(data);
            } catch (error) {
                console.error("Error fetching banks:", error);
            }
        };

        fetchBanks();
    }, []);

    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
                <label className="font-semibold text-gray-800 text-lg">
                    Select Payment Methods
                </label>
                <button
                    onClick={toggleSelectAll}
                    className="text-sm text-blue-600 hover:underline"
                >
                    {allSelected ? "Deselect All" : "Select All"}
                </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {bankList.map((bank) => {
                    if (!bank.payment_image) return null;

                    const isSelected = selectedBanks.includes(
                        bank.payment_name
                    );

                    return (
                        <div
                            key={bank.id}
                            onClick={() => handleSelect(bank.payment_name)}
                            className={`cursor-pointer group flex flex-col items-center justify-center p-4 border rounded-xl transition text-center
                                ${
                                    isSelected
                                        ? "border-blue-500 bg-blue-50 shadow"
                                        : "border-gray-200 hover:shadow"
                                }`}
                        >
                            <img
                                src={`http://127.0.0.1:8000/bank_logo/${bank.payment_image}`}
                                alt={bank.payment_name}
                                className={`w-16 h-10 object-contain mb-2 transition duration-200
                                    ${
                                        isSelected
                                            ? "grayscale-0 opacity-100"
                                            : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                                    }`}
                            />
                            <span className="text-sm text-gray-700 font-medium">
                                {bank.payment_name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BankSelector;
