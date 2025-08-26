<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('merchants', function (Blueprint $table) {
            $table->id();

            // Business Details
            $table->string('bd_company_name');
            $table->string('bd_b_p_name');
            $table->string('bp_b_type');
            $table->string('bd_b_address');
            $table->string('bd_settlement_bank_account_name_usd');
            $table->string('bd_settlement_bank_account_number_usd');
            $table->string('bd_settlement_bank_account_name_mmk');
            $table->string('bd_settlement_bank_account_number_mmk');

            // Owner Information
            $table->string('o_name');
            $table->string('o_designation');
            $table->string('o_email_address');
            $table->string('o_phone_number');

            // Alternate Contact
            $table->string('a_name')->nullable();
            $table->string('a_designation')->nullable();
            $table->string('a_email_address')->nullable();
            $table->string('a_phone_number')->nullable();

            // Technical Info
            $table->string('t_app_type')->nullable();
            $table->string('t_web_url')->nullable();
            $table->string('t_app_name')->nullable();
            $table->string('t_app_url')->nullable();
            $table->string('t_frontend_url')->nullable();
            $table->string('t_backend_url')->nullable();
            $table->string('t_ip_address')->nullable();
            $table->string('t_payments')->nullable();
            $table->enum('t_integration_type', ['direct', 'redirect']);
            $table->enum('t_settlement_process', ['monthly', 'nego']);

            // Technical Contact
            $table->string('t_name')->nullable();
            $table->string('t_designation')->nullable();
            $table->string('t_email_address')->nullable();
            $table->string('t_phone_number')->nullable();

            // Documents
            $table->string('d_company_extract_dica');
            $table->string('d_ceritificate_of_incorporation_company_registration');
            $table->string('d_corporate_profile');
            $table->string('business_logo')->nullable();
            $table->string('company_logo')->nullable();
            $table->string('customer_journey')->nullable();

            // Signature
            $table->string('signature')->nullable();
            $table->string('signed_name')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('merchants');
    }
};
