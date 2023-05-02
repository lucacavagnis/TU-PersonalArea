<?php

namespace App\Jobs;

use App\Events\Product\ProductExpired;
use App\Events\Product\ProductExpiring;
use App\Mail\ProductUnderEscort;
use App\Models\Lot;
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
        $products=Lot::where('property',0)->where('payed',0);
        foreach ($products as $product){
            $days=Carbon::now()->diffInDays(Carbon::parse($product->expire_date),false);
            if(!$product->expiring_notified){
                if($days<$product->company->expiring_limit)
                {
                    ProductExpiring::dispatch($product);
                    $product->expiring_notified=true;
                    $product->save();
                }
            }

            if(!$product->expired_notified){
                if($days<0)
                {
                    ProductExpired::dispatch($product);
                    $product->expired_notified=true;
                    $product->save();
                }
            }
        }
    }
}
