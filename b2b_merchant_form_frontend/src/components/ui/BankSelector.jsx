import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { baseUrl } from "../../types/urls";

const BankSelector = () => {
    const [selectedBanks, setSelectedBanks] = useState([]);
    const [bankList, setBankList] = useState([]);
    const {
        setValue,
        watch,
        formState: { errors },
    } = useFormContext();

    const allSelected =
        bankList.length > 0 && selectedBanks.length === bankList.length;

    const handleSelect = (payment_name) => {
        const newSelected = selectedBanks.includes(payment_name)
            ? selectedBanks.filter((name) => name !== payment_name)
            : [...selectedBanks, payment_name];

        setSelectedBanks(newSelected);
        setValue("t_payments", newSelected, { shouldValidate: true });
    };

    const toggleSelectAll = () => {
        const newSelected = allSelected
            ? []
            : bankList.map((b) => b.payment_name);

        setSelectedBanks(newSelected);
        setValue("t_payments", newSelected, { shouldValidate: true });
    };

    useEffect(() => {
        const fetchBanks = async () => {
            try {
                const response = await fetch(`
                    ${baseUrl}/api/payments
                `);
                const data = await response.json();
                setBankList(data);
            } catch (err) {
                console.error("Error fetching banks", err);
            }
        };
        fetchBanks();
    }, []);

    useEffect(() => {
        const subscription = watch((value) => {
            if (value.t_payments !== selectedBanks) {
                setSelectedBanks(value.t_payments || []);
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, selectedBanks]);

    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
                <label className="font-semibold text-gray-800 text-lg">
                    Select Payment Methods
                </label>
                <button
                    onClick={toggleSelectAll}
                    className="text-sm text-blue-600 hover:underline"
                    type="button"
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
                                src={`${baseUrl}/bank_logo/${bank.payment_image}`}
                                alt={bank.payment_name}
                                className={`w-16 h-10 object-contain mb-2 transition duration-200
                                    ${
                                        isSelected
                                            ? "grayscale-0 opacity-100"
                                            : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                                    }`}
                            />
                        </div>
                    );
                })}
            </div>

            {errors.t_payments && (
                <p className="text-sm text-red-500 mt-2">
                    {errors.t_payments.message}
                </p>
            )}
        </div>
    );
};

export default BankSelector;
