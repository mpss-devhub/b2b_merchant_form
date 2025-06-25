<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterMerchantRequest;
use App\Models\Merchant;
use Illuminate\Http\Request;

class MerchantController extends Controller
{
    public function store(RegisterMerchantRequest $request)
    {
        $merchant = Merchant::create($request->validated());
        return response()->json([
            'message' => 'Merchant registered successfully',
            'merchant' => $merchant,
        ], 201);
    }
}
