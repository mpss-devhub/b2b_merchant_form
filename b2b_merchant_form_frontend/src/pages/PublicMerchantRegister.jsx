import React from "react";
import { Section } from "../components/Section";
import Grid from "../components/Grid";
import InputField from "../components/ui/InputField";
import { useMerchantRegisterForm } from "../hooks/useMerchantRegisterForm";
import OptionField from "../components/ui/OptionField";
import BankSelector from "../components/ui/BankSelector";

const PublicMerchantRegister = () => {
    const { register, handleSubmit, errors, onSubmit } =
        useMerchantRegisterForm();
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Section title="Business Information">
                        <Grid gridNumber={2}>
                            <InputField
                                label="Company Name"
                                name="bd_company_name"
                                register={register}
                                error={errors.bd_company_name}
                            />
                            <InputField
                                label="Business / Product Name"
                                name="bd_b_p_name"
                                register={register}
                                error={errors.bd_b_p_name}
                            />
                            <InputField
                                label="Business Type"
                                name="bp_b_type"
                                register={register}
                                error={errors.bp_b_type}
                            />
                            <InputField
                                label="Business Address"
                                name="bd_b_address"
                                register={register}
                                error={errors.bd_b_address}
                            />
                            <InputField
                                label="Settlement Bank Account Name (USD)"
                                name="bd_settlement_bank_account_name_usd"
                                register={register}
                                error={
                                    errors.bd_settlement_bank_account_name_usd
                                }
                            />
                            <InputField
                                label="Settlement Bank Account Number (USD)"
                                name="bd_settlement_bank_account_number_usd"
                                register={register}
                                error={
                                    errors.bd_settlement_bank_account_number_usd
                                }
                            />
                            <InputField
                                label="Settlement Bank Account Name & Number(MMK)"
                                name="bd_settlement_bank_account_name_mmk"
                                register={register}
                                error={
                                    errors.bd_settlement_bank_account_name_mmk
                                }
                            />
                            <InputField
                                label="Settlement Bank Account Name & Number(MMK)"
                                name="bd_settlement_bank_account_number_mmk"
                                register={register}
                                error={
                                    errors.bd_settlement_bank_account_number_mmk
                                }
                            />
                        </Grid>
                    </Section>
                    <Section title="Owner/Director Information">
                        <Grid gridNumber={2}>
                            <InputField
                                label="Name"
                                name="o_name"
                                register={register}
                                error={errors.o_name}
                            />
                            <InputField
                                label="Designation"
                                name="o_designation"
                                register={register}
                                error={errors.o_designation}
                            />
                            <InputField
                                label="Email Address"
                                name="o_email_address"
                                register={register}
                                error={errors.o_email_address}
                            />
                            <InputField
                                label="Phone Number"
                                name="o_phone_number"
                                register={register}
                                error={errors.o_phone_number}
                            />
                        </Grid>
                    </Section>
                    <Section
                        title="Authorized Person Information"
                        note=" Note :: If authorized person is the same as owner,please
                leave blank."
                    >
                        <Grid gridNumber={2}>
                            <InputField
                                label="Name"
                                name="a_name"
                                register={register}
                                error={errors.a_name}
                            />
                            <InputField
                                label="Designation"
                                name="a_designation"
                                register={register}
                                error={errors.a_designation}
                            />
                            <InputField
                                label="Email Address"
                                name="a_email_address"
                                register={register}
                                error={errors.a_email_address}
                            />
                            <InputField
                                label="Phone Number"
                                name="a_phone_number"
                                register={register}
                                error={errors.a_phone_number}
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
                                register={register}
                                required={true}
                                error={errors.t_integration_type}
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
                                register={register}
                                required={true}
                                error={errors.t_app_type}
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
                                register={register}
                                required={true}
                                error={errors.t_settlement_process}
                            />
                            <InputField
                                label="Website Address URL"
                                name="t_web_url"
                                register={register}
                                error={errors.t_web_url}
                            />
                            <InputField
                                label="Application Name"
                                name="t_app_name"
                                register={register}
                                error={errors.t_app_name}
                            />
                            <InputField
                                label="Application URL"
                                name="t_app_url"
                                register={register}
                                error={errors.t_app_url}
                            />
                            <InputField
                                label="Frontend URL"
                                name="t_frontend_url"
                                register={register}
                                error={errors.t_frontend_url}
                            />
                            <InputField
                                label="Backend URL"
                                name="t_backend_url"
                                register={register}
                                error={errors.t_backend_url}
                            />
                            <InputField
                                label="IP Address for whitelist (Optional)"
                                name="t_ip_address"
                                register={register}
                                error={errors.t_ip_address}
                            />
                        </Grid>
                        <BankSelector />
                    </Section>

                    <Section title="Technical Person Information">
                        <Grid gridNumber={2}>
                            <InputField
                                label="Name"
                                name="t_name"
                                register={register}
                                error={errors.t_name}
                            />
                            <InputField
                                label="Designation"
                                name="t_designation"
                                register={register}
                                error={errors.t_designation}
                            />
                            <InputField
                                label="Email Address"
                                name="t_email_address"
                                register={register}
                                error={errors.t_email_address}
                            />
                            <InputField
                                label="Phone Number"
                                name="t_phone_number"
                                register={register}
                                error={errors.t_phone_number}
                            />
                        </Grid>
                    </Section>
                    <Section title="Required Documents">
                        <Grid gridNumber={2}>
                            <InputField
                                label="Company Extract (DICA)"
                                name="d_company_extract_dica"
                                register={register}
                                error={errors.d_company_extract_dica}
                                type="file"
                            />
                            <InputField
                                label="Certificate of Incorporation (Company Registration)"
                                name="d_ceritificate_of_incorporation_company_registration"
                                register={register}
                                error={
                                    errors.d_ceritificate_of_incorporation_company_registration
                                }
                                type="file"
                            />
                            <InputField
                                label="Company Logo"
                                name="company_logo"
                                register={register}
                                error={errors.company_logo}
                                type="file"
                                accept="image/*"
                            />
                            <InputField
                                label="Business Logo"
                                name="business_logo"
                                register={register}
                                error={errors.business_logo}
                                type="file"
                            />
                            <InputField
                                label="Corporate Profile"
                                name="d_corporate_profile"
                                register={register}
                                error={errors.d_corporate_profile}
                                type="file"
                            />
                            <InputField
                                label="Customer Journey"
                                name="customer_journey"
                                register={register}
                                error={errors.customer_journey}
                                type="file"
                            />
                        </Grid>
                    </Section>
                    <div className="flex justify-end mt-6">
                        <button className="rounded-lg px-8 py-2 bg-gray-200 hover:bg-gray-300 duration-300">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PublicMerchantRegister;
