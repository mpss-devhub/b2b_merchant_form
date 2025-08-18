import React, { useEffect, useState } from "react";
import { Section } from "../components/Section";
import Grid from "../components/Grid";
import Layout from "../components/Layout";
import { getMerchantById } from "../services/merchantRegisterService";
import { useParams } from "react-router-dom";
import { baseUrl } from "../types/urls";

const DisplayField = ({ label, value }) => (
    <div className="mb-5">
        <label className="block mb-1 font-medium text-gray-700">{label}</label>
        <input
            value={value || "-"}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 
                border-gray-300 focus:ring-blue-400
            "
            readOnly
        />
    </div>
);

const DisplayFileField = ({ label, value, baseURL }) => {
    if (!value) return null;

    const fileUrl = `${baseURL}/${value}`;
    const isImage = /\.(jpg|jpeg|png|gif)$/i.test(value);
    const isPDF = /\.pdf$/i.test(value);

    const handleOpen = () => {
        window.open(fileUrl, "_blank"); // open in new tab
    };

    return (
        <div className="mb-5">
            <label className="block mb-1 font-medium text-gray-700">
                {label}
            </label>
            {isImage && (
                <img
                    onClick={handleOpen}
                    src={fileUrl}
                    alt={label}
                    className="max-w-full h-auto rounded shadow cursor-pointer"
                />
            )}
            {isPDF && (
                <embed
                    onClick={handleOpen}
                    src={fileUrl}
                    type="application/pdf"
                    width="100%"
                    height="500px"
                    className="cursor-pointer"
                />
            )}
            {!isImage && !isPDF && (
                <a
                    href={fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    View File
                </a>
            )}
        </div>
    );
};

const MerchantDetail = () => {
    const { id } = useParams();
    const [merchantData, setMerchantData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getMerchantById(id);
                if (response.success) {
                    setMerchantData(response.data);
                } else {
                    console.error(
                        "Failed to fetch merchant:",
                        response.message
                    );
                }
            } catch (error) {
                console.error("Error fetching merchant:", error.message);
            }
        };

        fetchData();
    }, [id]);

    if (!merchantData) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <p className="text-lg font-semibold text-gray-700">
                        Loading...
                    </p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="min-h-screen bg-gray-100 p-6">
                <div className="max-w-6xl mx-auto">
                    <header className="text-center mb-10">
                        <h3 className="text-3xl font-extrabold text-gray-800">
                            Merchant Details
                        </h3>
                    </header>

                    <Section title="Business Information">
                        <Grid gridNumber={2}>
                            <DisplayField
                                label="Company Name"
                                value={merchantData.bd_company_name}
                            />
                            <DisplayField
                                label="Business / Product Name"
                                value={merchantData.bd_b_p_name}
                            />
                            <DisplayField
                                label="Business Type"
                                value={merchantData.bp_b_type}
                            />
                            <DisplayField
                                label="Business Address"
                                value={merchantData.bd_b_address}
                            />
                            <DisplayField
                                label="Settlement Bank Account Name (USD)"
                                value={
                                    merchantData.bd_settlement_bank_account_name_usd
                                }
                            />
                            <DisplayField
                                label="Settlement Bank Account Number (USD)"
                                value={
                                    merchantData.bd_settlement_bank_account_number_usd
                                }
                            />
                            <DisplayField
                                label="Settlement Bank Account Name (MMK)"
                                value={
                                    merchantData.bd_settlement_bank_account_name_mmk
                                }
                            />
                            <DisplayField
                                label="Settlement Bank Account Number (MMK)"
                                value={
                                    merchantData.bd_settlement_bank_account_number_mmk
                                }
                            />
                        </Grid>
                    </Section>

                    <Section title="Owner/Director Information">
                        <Grid gridNumber={2}>
                            <DisplayField
                                label="Name"
                                value={merchantData.o_name}
                            />
                            <DisplayField
                                label="Designation"
                                value={merchantData.o_designation}
                            />
                            <DisplayField
                                label="Email Address"
                                value={merchantData.o_email_address}
                            />
                            <DisplayField
                                label="Phone Number"
                                value={merchantData.o_phone_number}
                            />
                        </Grid>
                    </Section>

                    <Section title="Authorized Person Information">
                        <Grid gridNumber={2}>
                            <DisplayField
                                label="Name"
                                value={merchantData.a_name}
                            />
                            <DisplayField
                                label="Designation"
                                value={merchantData.a_designation}
                            />
                            <DisplayField
                                label="Email Address"
                                value={merchantData.a_email_address}
                            />
                            <DisplayField
                                label="Phone Number"
                                value={merchantData.a_phone_number}
                            />
                        </Grid>
                    </Section>

                    <Section title="Technical Information">
                        <Grid gridNumber={3}>
                            <DisplayField
                                label="Integration Type"
                                value={merchantData.t_integration_type}
                            />
                            <DisplayField
                                label="Application Type"
                                value={merchantData.t_app_type}
                            />
                            <DisplayField
                                label="Settlement Process"
                                value={merchantData.t_settlement_process}
                            />
                            <DisplayField
                                label="Website Address URL"
                                value={merchantData.t_web_url}
                            />
                            <DisplayField
                                label="Application Name"
                                value={merchantData.t_app_name}
                            />
                            <DisplayField
                                label="Application URL"
                                value={merchantData.t_app_url}
                            />
                            <DisplayField
                                label="Frontend URL"
                                value={merchantData.t_frontend_url}
                            />
                            <DisplayField
                                label="Backend URL"
                                value={merchantData.t_backend_url}
                            />
                            <DisplayField
                                label="IP Address"
                                value={merchantData.t_ip_address}
                            />
                        </Grid>
                    </Section>

                    <Section title="Technical Person Information">
                        <Grid gridNumber={2}>
                            <DisplayField
                                label="Name"
                                value={merchantData.t_name}
                            />
                            <DisplayField
                                label="Designation"
                                value={merchantData.t_designation}
                            />
                            <DisplayField
                                label="Email Address"
                                value={merchantData.t_email_address}
                            />
                            <DisplayField
                                label="Phone Number"
                                value={merchantData.t_phone_number}
                            />
                            <DisplayField
                                label="Payments"
                                value={merchantData.t_payments}
                            />
                        </Grid>
                    </Section>

                    <Section title="Required Documents">
                        <Grid gridNumber={2}>
                            <DisplayFileField
                                label="Company Extract (DICA)"
                                value={merchantData.d_company_extract_dica}
                                baseURL={baseUrl}
                            />
                            <DisplayFileField
                                label="Certificate of Incorporation"
                                value={
                                    merchantData.d_ceritificate_of_incorporation_company_registration
                                }
                                baseURL={baseUrl}
                            />
                            <DisplayFileField
                                label="Company Logo"
                                value={merchantData.company_logo}
                                baseURL={baseUrl}
                            />
                            <DisplayFileField
                                label="Business Logo"
                                value={merchantData.business_logo}
                                baseURL={baseUrl}
                            />
                            <DisplayFileField
                                label="Corporate Profile"
                                value={merchantData.d_corporate_profile}
                                baseURL={baseUrl}
                            />
                            <DisplayFileField
                                label="Customer Journey"
                                value={merchantData.customer_journey}
                                baseURL={baseUrl}
                            />
                        </Grid>
                    </Section>
                </div>
            </div>
        </Layout>
    );
};

export default MerchantDetail;
