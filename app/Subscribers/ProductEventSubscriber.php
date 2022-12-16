<?php

namespace App\Subscribers;

use App\Events\Product\ProductExpiring;
use App\Events\Product\ProductExpired;
use App\Events\Product\ProductOutOfStock;
use App\Events\Product\ProductUnderEscort;
use Illuminate\Support\Facades\Mail;

class ProductEventSubscriber
{

    public function handleProductExpiring($event) {
        foreach($event->product->company->supervisors as $supervisor)
            Mail::to($supervisor)
                ->cc('luca.cavagnis.work@gmail.com')
                ->send(new \App\Mail\ProductExpiring($event->product, $supervisor));
    }

    public function handleProductExpired($event) {
        foreach($event->product->company->supervisors as $supervisor)
            Mail::to($supervisor)
                ->cc('luca.cavagnis.work@gmail.com')
                ->send(new \App\Mail\ProductExpired($event->product, $supervisor));
    }

    public function handleProductUnderEscort($event) {
        foreach($event->product->company->supervisors as $supervisor)
            Mail::to($supervisor)
                ->cc('luca.cavagnis.work@gmail.com')
                ->send(new \App\Mail\ProductUnderEscort($event->product, $supervisor));
    }

    public function handleProductOutOfStock($event) {
        foreach($event->product->company->supervisors as $supervisor)
            Mail::to($supervisor)
                ->cc('luca.cavagnis.work@gmail.com')
                ->send(new \App\Mail\ProductOutOfStock($event->product, $supervisor));
    }


    /**
     * Register the listeners for the subscriber.
     *
     * @param  \Illuminate\Events\Dispatcher  $events
     * @return array
     */
    public function subscribe($events)
    {
        return [
            ProductExpiring::class => 'handleProductExpiring',
            ProductExpired::class => 'handleProductExpired',
            ProductUnderEscort::class => 'handleProductUnderEscort',
            ProductOutOfStock::class => 'handleProductOutOfStock',
            ];
    }
}
