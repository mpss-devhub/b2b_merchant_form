import React, { useEffect, useState } from "react";
import { getMerchant } from "../services/merchantRegisterService";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const MerchantTable = () => {
    const [merchants, setMerchants] = useState([]);

    useEffect(() => {
        fetchMerchants();
    }, []);

    const fetchMerchants = async () => {
        try {
            const response = await getMerchant();
            setMerchants(response.data);
        } catch (err) {
            console.error("Failed to fetch merchants", err);
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-max divide-y divide-gray-200">
                <thead className="bg-red-400 text-left text-white">
                    <tr>
                        <th className="p-4">#</th>
                        <th className="p-4">Company Name</th>
                        <th className="p-4">Business Name</th>
                        <th className="p-4">Owner Name</th>
                        <th className="p-4">Business Address</th>
                        <th className="p-4">Phone</th>
                        <th className="p-4">App Type</th>
                        <th className="p-4">Website</th>
                        <th className="p-4">Created At</th>
                        <th className="p-4">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                    {Array.isArray(merchants) &&
                        merchants.map((merchant, index) => (
                            <tr key={merchant.id} className="hover:bg-gray-50">
                                <td className="p-4">{index + 1}</td>
                                <td className="p-4">
                                    {merchant.bd_company_name}
                                </td>
                                <td className="p-4">
                                    {merchant.bd_b_p_name}
                                </td>
                                <td className="p-4">{merchant.o_name}</td>
                                <td className="p-4">
                                    {merchant.bd_b_address}
                                </td>
                                <td className="p-4">
                                    {merchant.o_phone_number}
                                </td>
                                <td className="p-4">
                                    {merchant.t_app_type}
                                </td>
                                <td className="p-4">
                                    <Link
                                        to={merchant.t_web_url}
                                        className="text-blue-600 underline break-all"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {merchant.t_web_url}
                                    </Link>
                                </td>
                                <td className="p-4">
                                    {merchant.created_at}
                                </td>
                                <td className="p-4">
                                    <div className="flex justify-center items-center w-full h-full">
                                        <Link
                                            to={`/admin/merchant/${merchant.id}`}
                                            className="text-red-400 text-lg"
                                        >
                                            <FaExclamationCircle />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default MerchantTable;
