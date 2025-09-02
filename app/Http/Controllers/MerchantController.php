<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterMerchantRequest;
use App\Models\Merchant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class MerchantController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['store']]);
    }

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
        $exists = Merchant::where('bd_b_p_name', $request->bd_b_p_name)->exists();

        if ($exists) {
            return response()->json([
                'message' => 'Validation failed: Merchant with this name already exists.'
            ], 422);
        }
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

    public function index()
    {
        $merchants = Merchant::all();
        return response()->json([
            'success' => true,
            'message' => 'Merchants retrieved successfully.',
            'data' => $merchants
        ]);
    }

    public function get($id)
    {
        $merchant = Merchant::find($id);
        if (!$merchant) {
            return response()->json([
                'success' => false,
                'message' => 'Merchants not found',
                'data' => 'Merchant Not Found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Merchants retrieved successfully.',
            'data' => $merchant
        ]);
    }
}
