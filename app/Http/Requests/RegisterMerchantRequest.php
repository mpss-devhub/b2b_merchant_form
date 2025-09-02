<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RegisterMerchantRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            // Business Details
            'bd_company_name' => 'required|string|min:3|max:255',
            'bd_b_p_name' => 'required|string|max:255',
            'bp_b_type' => 'required|string|max:255',
            'bd_b_address' => 'required|string|max:255',
            'bd_settlement_bank_account_name_usd' => 'nullable|string|max:255',
            'bd_settlement_bank_account_number_usd' => 'nullable|string|max:255',
            'bd_settlement_bank_account_name_mmk' => 'required|string|max:255',
            'bd_settlement_bank_account_number_mmk' => 'required|string|max:255',

            // Owner Information
            'o_name' => 'required|string|max:255',
            'o_designation' => 'required|string|max:255',
            'o_email_address' => 'required|email|max:255',
            'o_phone_number' => 'required|string|max:20',

            // Alternate Contact
            'a_name' => 'nullable|string|max:255',
            'a_designation' => 'nullable|string|max:255',
            'a_email_address' => 'nullable|email|max:255',
            'a_phone_number' => 'nullable|string|max:20',

            // Technical Info
            't_app_type' => 'required|min:1',
            't_web_url' => 'nullable|url|max:255',
            't_app_name' => 'nullable|string|max:255',
            't_app_url' => 'nullable|url|max:255',
            't_frontend_url' => 'nullable|url|max:255',
            't_backend_url' => 'nullable|url|max:255',
            't_ip_address' => 'nullable|string|max:255',
            't_integration_type' => ['required', Rule::in(['direct', 'redirect'])],
            't_settlement_process' => ['required', Rule::in(['monthly', 'nego'])],
            't_payments' => 'required|min:1',

            // Technical Contact
            't_name' => 'required|string|max:255',
            't_designation' => 'required|string|max:255',
            't_email_address' => 'required|email|max:255',
            't_phone_number' => 'required|string|max:20',

            // Documents
            'd_company_extract_dica' => ['required', 'mimes:pdf', 'max:10240'],
            'd_ceritificate_of_incorporation_company_registration' => ['required', 'mimes:pdf', 'max:10240'],
            'd_corporate_profile' => ['required', 'mimes:pdf', 'max:10240'],
            'customer_journey' => ['required', 'mimes:pdf', 'max:10240'],

            'business_logo' => ['required', 'mimes:jpg,jpeg,png,webp', 'max:10240'],
            'company_logo' => ['required', 'mimes:jpg,jpeg,png,webp', 'max:10240'],
        ];
    }
}
