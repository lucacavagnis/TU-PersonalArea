<?php

namespace App\Subscribers;

use App\Events\Product\ProductExpiring;
use App\Events\Product\ProductExpired;
use App\Events\Product\ProductOutOfStock;
use App\Events\Product\ProductUnderEscort;
use App\Events\Product\QuotationRequest;
use Illuminate\Support\Facades\Mail;

class ProductEventSubscriber
{

    public function handleProductExpiring($event): void
    {
        foreach($event->product->company->supervisors as $supervisor)
            Mail::to($supervisor)
                ->cc(env("MAIL_TO_CC_ADDRESS"))
                ->send(new \App\Mail\ProductExpiring($event->product, $supervisor));
    }

    public function handleProductExpired($event): void
    {
        foreach($event->product->company->supervisors as $supervisor)
            Mail::to($supervisor)
                ->cc(env("MAIL_TO_CC_ADDRESS"))
                ->send(new \App\Mail\ProductExpired($event->product, $supervisor));
    }

    public function handleProductUnderEscort($event): void
    {
        foreach($event->product->company->supervisors as $supervisor)
            Mail::to($supervisor->email)
                ->cc(env("MAIL_TO_CC_ADDRESS"))
                ->send(new \App\Mail\ProductUnderEscort($event->product, $supervisor));
    }

    public function handleProductOutOfStock($event): void
    {
        foreach($event->product->company->supervisors as $supervisor)
            Mail::to($supervisor->email)
                ->cc(env("MAIL_TO_CC_ADDRESS"))
                ->send(new \App\Mail\ProductOutOfStock($event->product, $supervisor));
    }

    public function handleQuotationRequest($event): void
    {

        foreach($event->product->company->supervisors as $supervisor)
            Mail::to($supervisor->email)
                ->cc(env("MAIL_TO_CC_ADDRESS"))
                ->send(new \App\Mail\QuotationRequestSent($event->product, $supervisor));

        Mail::to($event->user->email)
            ->cc(env("MAIL_TO_CC_ADDRESS"))
            ->send(new \App\Mail\QuotationRequestSent($event->product, $event->user));

        Mail::to(env("MAIL_TO_ADDRESS",'info@tutto-ufficio.it'))
            ->cc(env("MAIL_TO_CC_ADDRESS"))
            ->send(new \App\Mail\QuotationRequestReceived($event->product, $event->user));


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
            QuotationRequest::class => 'handleQuotationRequest',
            ];
    }
}
