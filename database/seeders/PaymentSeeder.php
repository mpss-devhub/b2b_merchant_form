<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $paymentMethods = [
            ['payment_name' => 'CB', 'payment_image' => 'cbpay.png'],
            ['payment_name' => 'AYA', 'payment_image' => 'ayapay.png'],
            ['payment_name' => 'KBZ', 'payment_image' => 'kbzpay.png'],
            ['payment_name' => 'MPitesan', 'payment_image' => 'mpitesan.png'],
            ['payment_name' => 'MoMoney', 'payment_image' => 'momoney.png'],
            ['payment_name' => 'MPU', 'payment_image' => 'mpu.png'],
            ['payment_name' => 'OkDollar', 'payment_image' => 'okdollar.png'],
            ['payment_name' => 'OnePay', 'payment_image' => 'onepay.png'],
            ['payment_name' => 'UAB', 'payment_image' => 'uabpay.png'],
            ['payment_name' => 'Wave', 'payment_image' => 'wavepay.png'],
            ['payment_name' => 'Visa', 'payment_image' => 'visamaster.png'],
        ];

        foreach ($paymentMethods as $method) {
            $sourcePath = public_path('bank_logo/' . $method['payment_image']);
            $destinationPath = 'bank_logo/' . $method['payment_image'];
            if (file_exists($sourcePath)) {
                Storage::put($destinationPath, file_get_contents($sourcePath));
            }
        }

        DB::table('payment_methods')->insert(
            array_map(fn($method) => [
                'payment_name' => $method['payment_name'],
                'payment_image' => $method['payment_image'],
                'status' => true,
            ], $paymentMethods)
        );
    }
}
