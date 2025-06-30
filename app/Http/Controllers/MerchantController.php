<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterMerchantRequest;
use App\Models\Merchant;
use Illuminate\Support\Str;

class MerchantController extends Controller
{
    public function store(RegisterMerchantRequest $request)
    {
        $fileFields = [
            'd_company_extract_dica' => 'dica_extracts',
            'd_ceritificate_of_incorporation_company_registration' => 'certificates',
            'customer_journey' => 'journeys',
            'business_logo' => 'business_logos',
            'd_corporate_profile' => 'corporate_profiles',
            'company_logo' => 'company_logos',
        ];

        $data = $request->validated();

        foreach ($fileFields as $field => $folder) {
            if ($request->hasFile($field)) {
                $file = $request->file($field);
                $filename = uniqid() . '_' . Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $file->getClientOriginalExtension();
                $path = $file->storeAs("public/{$folder}", $filename);
                $data[$field] = str_replace('public/', 'storage/', $path); 
            }
        }

        $merchant = Merchant::create($data);

        return response()->json([
            'message' => 'Merchant registered successfully',
            'merchant' => $merchant,
        ], 201);
    }
}
