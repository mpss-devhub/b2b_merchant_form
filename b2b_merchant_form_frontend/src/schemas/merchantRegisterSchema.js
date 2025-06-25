import { z } from "zod";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/*"];
const ACCEPTED_PDF_TYPE = ["application/pdf"];

export const merchantRegisterSchema = z.object({
    bd_company_name: z
        .string()
        .min(3, "Company name must be at least 3 characters long"),
    bd_b_p_name: z.string().min(1, "Business / Product Name is required"),
    bp_b_type: z.string().min(1, "Business Type is required"),
    bd_b_address: z.string().min(1, "Business Address is required"),
    bd_settlement_bank_account_name_usd: z.string(),
    bd_settlement_bank_account_number_usd: z.string(),
    bd_settlement_bank_account_name_mmk: z
        .string()
        .min(1, "Settlement Bank Account Name & Number(MMK)"),
    bd_settlement_bank_account_number_mmk: z
        .string()
        .min(1, "Settlement Bank Account Name & Number(MMK)"),

    o_name: z.string().min(1, "Owner Name is required"),
    o_designation: z.string().min(1, "Owner Designation is required"),
    o_email_address: z.string().min(1, "Owner Email Address is required"),
    o_phone_number: z.string().min(1, "Owner Phone Number is required"),

    a_name: z.string(),
    a_designation: z.string(),
    a_email_address: z.string(),
    a_phone_number: z.string(),

    t_app_type: z.string(),
    t_web_url: z.string(),
    t_app_name: z.string(),
    t_app_url: z.string(),
    t_frontend_url: z.string(),
    t_backend_url: z.string(),
    t_ip_address: z.string(),
    t_integration_type: z.string(),
    t_settlement_process: z.string(),

    t_name: z.string().min(1, "Technical Person Name is required"),
    t_designation: z
        .string()
        .min(1, "Technical Person Designation is required"),
    t_email_address: z
        .string()
        .min(1, "Technical Person Email Address is required"),
    t_phone_number: z
        .string()
        .min(1, "Technical Person Phone Number is required"),

    d_company_extract_dica: z
        .instanceof(File)
        .refine((file) => file.size <= MAX_FILE_SIZE, {
            message: "PDF file size must be 10MB or less",
        })
        .refine((file) => ACCEPTED_PDF_TYPE.includes(file.type), {
            message: "Only PDF files are allowed",
        }),
    d_ceritificate_of_incorporation_company_registration: z
        .instanceof(File)
        .refine((file) => file.size <= MAX_FILE_SIZE, {
            message: "PDF file size must be 10MB or less",
        })
        .refine((file) => ACCEPTED_PDF_TYPE.includes(file.type), {
            message: "Only PDF files are allowed",
        }),
    d_corporate_profile: z
        .instanceof(File)
        .refine((file) => file.size <= MAX_FILE_SIZE, {
            message: "PDF file size must be 10MB or less",
        })
        .refine((file) => ACCEPTED_PDF_TYPE.includes(file.type), {
            message: "Only PDF files are allowed",
        }),
    customer_journey: z
        .instanceof(File)
        .refine((file) => file.size <= MAX_FILE_SIZE, {
            message: "PDF file size must be 10MB or less",
        })
        .refine((file) => ACCEPTED_PDF_TYPE.includes(file.type), {
            message: "Only PDF files are allowed",
        }),
    business_logo: z
        .instanceof(File)
        .refine((file) => file.size <= MAX_FILE_SIZE, {
            message: "Image file size must be 10MB or less",
        })
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
            message: "Only JPG, PNG, or WEBP images are allowed",
        }),
    company_logo: z
        .instanceof(File)
        .refine((file) => file.size <= MAX_FILE_SIZE, {
            message: "Image file size must be 10MB or less",
        })
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
            message: "Only JPG, PNG, or WEBP images are allowed",
        }),
});
