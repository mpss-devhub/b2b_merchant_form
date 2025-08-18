import React from "react";
import { Section } from "../components/Section";
import Grid from "../components/Grid";
import InputField from "../components/ui/InputField";
import { useMerchantRegisterForm } from "../hooks/useMerchantRegisterForm";
import OptionField from "../components/ui/OptionField";
import BankSelector from "../components/ui/BankSelector";
import { FormProvider } from "react-hook-form";

const PublicMerchantRegister = () => {
    const { handleSubmit, onSubmit, ...methods } = useMerchantRegisterForm();

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-10">
                    <h3 className="text-3xl font-extrabold text-gray-800">
                        Merchant Application
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">
                        Please provide all required business details
                    </p>
                </header>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Section title="Business Information">
                            <Grid gridNumber={2}>
                                <InputField
                                    label="Company Name"
                                    name="bd_company_name"
                                />
                                <InputField
                                    label="Business / Product Name"
                                    name="bd_b_p_name"
                                />
                                <InputField
                                    label="Business Type"
                                    name="bp_b_type"
                                />
                                <InputField
                                    label="Business Address"
                                    name="bd_b_address"
                                />
                                <InputField
                                    label="Settlement Bank Account Name (USD)"
                                    name="bd_settlement_bank_account_name_usd"
                                />
                                <InputField
                                    label="Settlement Bank Account Number (USD)"
                                    name="bd_settlement_bank_account_number_usd"
                                />
                                <InputField
                                    label="Settlement Bank Account Name & Number(MMK)"
                                    name="bd_settlement_bank_account_name_mmk"
                                />
                                <InputField
                                    label="Settlement Bank Account Name & Number(MMK)"
                                    name="bd_settlement_bank_account_number_mmk"
                                />
                            </Grid>
                        </Section>
                        <Section title="Owner/Director Information">
                            <Grid gridNumber={2}>
                                <InputField label="Name" name="o_name" />
                                <InputField
                                    label="Designation"
                                    name="o_designation"
                                />
                                <InputField
                                    label="Email Address"
                                    name="o_email_address"
                                />
                                <InputField
                                    label="Phone Number"
                                    name="o_phone_number"
                                />
                            </Grid>
                        </Section>
                        <Section
                            title="Authorized Person Information"
                            note=" Note :: If authorized person is the same as owner,please
                leave blank."
                        >
                            <Grid gridNumber={2}>
                                <InputField label="Name" name="a_name" />
                                <InputField
                                    label="Designation"
                                    name="a_designation"
                                />
                                <InputField
                                    label="Email Address"
                                    name="a_email_address"
                                />
                                <InputField
                                    label="Phone Number"
                                    name="a_phone_number"
                                />
                            </Grid>
                        </Section>
                        <Section
                            title="Technical Information"
                            note="Please notice that SDK version is only availabe for Direct Integration Type."
                        >
                            <Grid gridNumber={3}>
                                <OptionField
                                    label="Integration Type"
                                    name="t_integration_type"
                                    type="radio"
                                    options={[
                                        { label: "Direct", value: "direct" },
                                        {
                                            label: "Redirect",
                                            value: "redirect",
                                        },
                                    ]}
                                    required={true}
                                />
                                <OptionField
                                    label="Which will you integrate with?"
                                    name="t_app_type"
                                    type="radio"
                                    options={[
                                        { label: "Website", value: "website" },
                                        {
                                            label: "Application",
                                            value: "application",
                                        },
                                    ]}
                                    required={true}
                                />
                                <OptionField
                                    label="Settlement Process"
                                    name="t_settlement_process"
                                    type="radio"
                                    options={[
                                        { label: "Monthly", value: "monthly" },
                                        {
                                            label: "Negotitate",
                                            value: "nego",
                                        },
                                    ]}
                                    required={true}
                                />
                                <InputField
                                    label="Website Address URL"
                                    name="t_web_url"
                                />
                                <InputField
                                    label="Application Name"
                                    name="t_app_name"
                                />
                                <InputField
                                    label="Application URL"
                                    name="t_app_url"
                                />
                                <InputField
                                    label="Frontend URL"
                                    name="t_frontend_url"
                                />
                                <InputField
                                    label="Backend URL"
                                    name="t_backend_url"
                                />
                                <InputField
                                    label="IP Address for whitelist (Optional)"
                                    name="t_ip_address"
                                />
                            </Grid>
                            <BankSelector name="t_payments" />
                        </Section>

                        <Section title="Technical Person Information">
                            <Grid gridNumber={2}>
                                <InputField label="Name" name="t_name" />
                                <InputField
                                    label="Designation"
                                    name="t_designation"
                                />
                                <InputField
                                    label="Email Address"
                                    name="t_email_address"
                                />
                                <InputField
                                    label="Phone Number"
                                    name="t_phone_number"
                                />
                            </Grid>
                        </Section>
                        <Section title="Required Documents">
                            <Grid gridNumber={2}>
                                <InputField
                                    label="Company Extract (DICA)"
                                    name="d_company_extract_dica"
                                    type="file"
                                    accept="application/pdf"
                                />
                                <InputField
                                    label="Certificate of Incorporation (Company Registration)"
                                    name="d_ceritificate_of_incorporation_company_registration"
                                    type="file"
                                    accept="application/pdf"
                                />
                                <InputField
                                    label="Company Logo"
                                    name="company_logo"
                                    type="file"
                                    accept="image/*"
                                />
                                <InputField
                                    label="Business Logo"
                                    name="business_logo"
                                    type="file"
                                    accept="image/*"
                                />
                                <InputField
                                    label="Corporate Profile"
                                    name="d_corporate_profile"
                                    type="file"
                                    accept="application/pdf"
                                />
                                <InputField
                                    label="Customer Journey"
                                    name="customer_journey"
                                    type="file"
                                    accept="application/pdf"
                                />
                            </Grid>
                        </Section>
                        <div className="flex justify-end mt-6">
                            <button className="rounded-lg px-8 py-2 text-white font-semibold bg-cyan-700 hover:bg-cyan-600 duration-300">
                                Register
                            </button>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
};

export default PublicMerchantRegister;
