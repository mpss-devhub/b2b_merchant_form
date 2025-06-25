<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Merchant extends Model
{
    use HasFactory;

    protected $table = 'merchants';

    protected $fillable = [
        // Business Details
        'bd_company_name',
        'bd_b_p_name',
        'bp_b_type',
        'bd_b_address',
        'bd_settlement_bank_account_name_usd',
        'bd_settlement_bank_account_number_usd',
        'bd_settlement_bank_account_name_mmk',
        'bd_settlement_bank_account_number_mmk',

        // Owner Information
        'o_name',
        'o_designation',
        'o_email_address',
        'o_phone_number',

        // Alternate Contact
        'a_name',
        'a_designation',
        'a_email_address',
        'a_phone_number',

        // Technical Info
        't_app_type',
        't_web_url',
        't_app_name',
        't_app_url',
        't_frontend_url',
        't_backend_url',
        't_ip_address',
        't_integration_type',
        't_settlement_process',

        // Technical Contact
        't_name',
        't_designation',
        't_email_address',
        't_phone_number',

        // Documents
        'd_company_extract_dica',
        'd_ceritificate_of_incorporation_company_registration',
        'd_corporate_profile',
        'business_logo',
        'company_logo',
        'customer_journey',
    ];
}
