<?php

namespace App\Jobs;

use App\Events\Product\ProductExpired;
use App\Events\Product\ProductExpiring;
use App\Mail\ProductUnderEscort;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class CheckExpiringStatus implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $products=Product::all();
        foreach ($products as $product){
            Log::debug($product->name.' checking');
            $days=Carbon::now()->diffInDays(Carbon::parse($product->expire_date),false);
            Log::debug($days);
            if(!$product->expiring_notified){
                if($days<$product->company->expiring_limit)
                {
                    Log::debug($product->name.' expiring');
                    ProductExpiring::dispatch($product);
                    $product->expiring_notified=true;
                    $product->save();
                }
            }

            if(!$product->expired_notified){
                if($days<0)
                {
                    Log::debug($product->name.' expired');
                    ProductExpired::dispatch($product);
                    $product->expired_notified=true;
                    $product->save();
                }
            }
        }
    }
}
