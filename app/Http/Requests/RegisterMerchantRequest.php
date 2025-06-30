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
            'bd_company_name' => 'required|string|max:255',
            'bd_b_p_name' => 'required|string|max:255',
            'bp_b_type' => 'required|string|max:255',
            'bd_b_address' => 'required|string|max:255',
            'bd_settlement_bank_account_name_usd' => 'required|string|max:255',
            'bd_settlement_bank_account_number_usd' => 'required|string|max:255',
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
            't_app_type' => ['required', 'string', Rule::in(['website', 'application'])],
            't_web_url' => 'nullable|url|max:255',
            't_app_name' => 'nullable|string|max:255',
            't_app_url' => 'nullable|url|max:255',
            't_frontend_url' => 'nullable|url|max:255',
            't_backend_url' => 'nullable|url|max:255',
            't_ip_address' => 'nullable|ip',
            't_integration_type' => ['required', Rule::in(['direct', 'redirect'])],
            't_settlement_process' => ['required', Rule::in(['monthly', 'nego'])],

            // Technical Contact
            't_name' => 'nullable|string|max:255',
            't_designation' => 'nullable|string|max:255',
            't_email_address' => 'nullable|email|max:255',
            't_phone_number' => 'nullable|string|max:20',

            // Documents
            'd_company_extract_dica' => ['required', 'mimes:pdf,jpg,jpeg,png'],
            'd_ceritificate_of_incorporation_company_registration' => ['required', 'mimes:pdf,jpg,jpeg,png'],
            'customer_journey' => ['required', 'mimes:pdf,jpg,jpeg,png'],
            'd_corporate_profile' => ['required', 'mimes:pdf,jpg,jpeg,png'],
            'business_logo' => ['nullable', 'mimes:jpg,jpeg,png'],
            'company_logo' => ['nullable', 'mimes:jpg,jpeg,png'],

        ];
    }
}
