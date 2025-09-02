import { z } from "zod";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp",
];
const ACCEPTED_PDF_TYPE = ["application/pdf"];

const NAME_REGEX = /^[a-zA-ZÀ-ÿ' -]+$/;
const PHONE_REGEX = /^\+?\d{7,15}$/;

export const merchantRegisterSchema = z
    .object({
        bd_company_name: z
            .string()
            .min(3, "Company name must be at least 3 characters long"),
        bd_b_p_name: z.string().min(1, "Business / Product Name is required"),
        bp_b_type: z.string().min(1, "Business Type is required"),
        bd_b_address: z
            .string()
            .min(1, "Business Address is required")
            .max(100, "Business Address must be at most 100 characters long"),

        bd_settlement_bank_account_name_usd: z.string(),
        bd_settlement_bank_account_number_usd: z
            .string()
            .min(10, "Bank account number must be at least 10 digits")
            .max(19, "Bank account number must not exceed 19 digits")
            .regex(
                /^[\d\s]*$/,
                "Bank account number must contain only digits and spaces"
            )
            .transform((val) => val.replace(/\s+/g, ""))
            .optional()
            .or(z.literal("")),

        bd_settlement_bank_account_name_mmk: z
            .string()
            .min(1, "Settlement Bank Account Name & Number(MMK) is required"),
        bd_settlement_bank_account_number_mmk: z
            .string()
            .min(10, "Bank account number must be at least 10 digits")
            .max(19, "Bank account number must not exceed 19 digits")
            .regex(/^[\d\s]*$/, "Bank account number must contain only digits")
            .transform((val) => val.replace(/\s+/g, "")),

        o_name: z.string().min(1, "Owner Name is required").regex(NAME_REGEX, {
            message:
                "Owner Name can only contain letters, spaces, apostrophes, and hyphens",
        }),
        o_designation: z.string().min(1, "Owner Designation is required"),
        o_email_address: z
            .string()
            .email("Invalid email address")
            .min(1, "Owner Email Address is required"),
        o_phone_number: z
            .string()
            .min(7, "Phone number must be at least 7 digits long")
            .max(15, "Phone number must be at most 15 digits long")
            .regex(PHONE_REGEX, {
                message:
                    "Phone number can only contain digits and may start with +",
            }),

        a_name: z
            .string()
            .regex(NAME_REGEX, {
                message:
                    "Alternate Name can only contain letters, spaces, apostrophes, and hyphens",
            })
            .optional()
            .or(z.literal("")),

        a_designation: z.string().optional().or(z.literal("")),
        a_email_address: z
            .string()
            .email("Invalid email address")
            .optional()
            .or(z.literal("")),

        a_phone_number: z
            .string()
            .min(7, "Phone number must be at least 7 digits long")
            .max(15, "Phone number must be at most 15 digits long")
            .regex(PHONE_REGEX, {
                message:
                    "Phone number can only contain digits and may start with +",
            })
            .optional()
            .or(z.literal("")),

        t_payments: z
            .array(z.string())
            .min(1, { message: "At least one payment method is required" }),
        t_app_type: z
            .array(z.string())
            .min(1, { message: "Please select at least one application type" }),

        t_web_url: z
            .string()
            .url("Invalid Website URL")
            .optional()
            .or(z.literal("")),
        t_app_name: z.string().optional(),
        t_app_url: z
            .string()
            .url("Invalid Application URL")
            .optional()
            .or(z.literal("")),
        t_frontend_url: z
            .string()
            .url("Please provide a valid Frontend URL")
            .optional()
            .or(z.literal(null)),
        t_backend_url: z
            .string()
            .url("Please provide a valid Backend URL")
            .optional()
            .or(z.literal(null)),
        t_ip_address: z.string().optional(),
        t_integration_type: z
            .string({
                required_error: "Integration type is required",
                invalid_type_error: "Integration type must be selected",
            })
            .min(1, { message: "Integration type must be selected" }),
        t_settlement_process: z
            .string({
                required_error: "Settlement Process is required",
                invalid_type_error: "Settlement Process must be selected",
            })
            .min(1, { message: "Integration type must be selected" }),
        t_name: z.string().min(1, "Technical Person Name is required"),
        t_designation: z
            .string()
            .min(1, "Technical Person Designation is required"),
        t_email_address: z
            .string()
            .email("Invalid email address")
            .min(1, "Technical Person Email Address is required"),
        t_phone_number: z
            .string()
            .min(7, "Phone number must be at least 7 digits long")
            .max(15, "Phone number must be at most 15 digits long")
            .regex(PHONE_REGEX, {
                message:
                    "Phone number can only contain digits and may start with +",
            }),

        // File validations
        d_company_extract_dica: z
            .any()
            .refine(
                (val) => val instanceof FileList && val.length > 0,
                "Dica file is required"
            )
            .refine((val) => val[0] instanceof File, "Input must be a file")
            .refine((val) => val[0]?.size <= MAX_FILE_SIZE, {
                message: "PDF file size must be 10MB or less",
            })
            .refine((val) => ACCEPTED_PDF_TYPE.includes(val[0]?.type), {
                message: "Only PDF files are allowed",
            }),

        d_ceritificate_of_incorporation_company_registration: z
            .any()
            .refine(
                (val) => val instanceof FileList && val.length > 0,
                "Certificate of Incorporation / Company Registration is required"
            )
            .refine((val) => val[0] instanceof File, "Input must be a file")
            .refine((val) => val[0]?.size <= MAX_FILE_SIZE, {
                message: "PDF file size must be 10MB or less",
            })
            .refine((val) => ACCEPTED_PDF_TYPE.includes(val[0]?.type), {
                message: "Only PDF files are allowed",
            }),

        d_corporate_profile: z
            .any()
            .refine(
                (val) => val instanceof FileList && val.length > 0,
                "Corporate Profile is required"
            )
            .refine((val) => val[0] instanceof File, "Input must be a file")
            .refine((val) => val[0]?.size <= MAX_FILE_SIZE, {
                message: "PDF file size must be 10MB or less",
            })
            .refine((val) => ACCEPTED_PDF_TYPE.includes(val[0]?.type), {
                message: "Only PDF files are allowed",
            }),

        customer_journey: z
            .any()
            .refine(
                (val) => val instanceof FileList && val.length > 0,
                "Customer Journey is required"
            )
            .refine((val) => val[0] instanceof File, "Input must be a file")
            .refine((val) => val[0]?.size <= MAX_FILE_SIZE, {
                message: "PDF file size must be 10MB or less",
            })
            .refine((val) => ACCEPTED_PDF_TYPE.includes(val[0]?.type), {
                message: "Only PDF files are allowed",
            }),

        business_logo: z
            .any()
            .refine(
                (val) => val instanceof FileList && val.length > 0,
                "Business logo is required"
            )
            .refine((val) => val[0] instanceof File, "Input must be a file")
            .refine((val) => val[0]?.size <= MAX_FILE_SIZE, {
                message: "Image file size must be 10MB or less",
            })
            .refine((val) => ACCEPTED_IMAGE_TYPES.includes(val[0]?.type), {
                message: "Only JPEG, JPG, PNG, or WEBP images are allowed",
            }),

        company_logo: z
            .any()
            .refine(
                (val) => val instanceof FileList && val.length > 0,
                "Company logo is required"
            )
            .refine((val) => val[0] instanceof File, "Input must be a file")
            .refine((val) => val[0]?.size <= MAX_FILE_SIZE, {
                message: "Image file size must be 10MB or less",
            })
            .refine((val) => ACCEPTED_IMAGE_TYPES.includes(val[0]?.type), {
                message: "Only JPEG, JPG, PNG, or WEBP images are allowed",
            }),
    })
    .superRefine((data, ctx) => {
        if (
            data.t_app_type.includes("website") &&
            (!data.t_web_url || data.t_web_url.trim() === "")
        ) {
            ctx.addIssue({
                path: ["t_web_url"],
                code: "custom",
                message:
                    "Website URL is required when Application Type is 'website'",
            });
        }

        if (data.t_app_type.includes("application")) {
            if (!data.t_app_name || data.t_app_name.trim() === "") {
                ctx.addIssue({
                    path: ["t_app_name"],
                    code: "custom",
                    message:
                        "Application Name is required when Application Type is 'application'",
                });
            }
            if (!data.t_app_url || data.t_app_url.trim() === "") {
                ctx.addIssue({
                    path: ["t_app_url"],
                    code: "custom",
                    message:
                        "Application URL is required when Application Type is 'application'",
                });
            }
        }
    });
