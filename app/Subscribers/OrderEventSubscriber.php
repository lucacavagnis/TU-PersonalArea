<?php

namespace App\Subscribers;

use App\Events\Order\OrderApproved;
use App\Events\Order\OrderConfirmed;
use App\Events\Order\OrderPending;
use App\Events\Order\OrderRejected;
use App\Mail\OrderApprovalRequest as OrderApprovalRequestMail;
use App\Mail\OrderApproved as OrderApprovedMail;
use App\Mail\OrderConfirmed as OrderConfirmedMail;
use App\Mail\OrderPending as OrderUnderApprovalMail;
use App\Mail\OrderReceived;
use App\Mail\OrderRejected as OrderRejectedMail;
use Illuminate\Support\Facades\Mail;

class OrderEventSubscriber
{

    public function handleOrderPending($event) {
        foreach($event->order->user->company->supervisors as $supervisor)
            Mail::to($supervisor)
                ->cc('luca.cavagnis.work@gmail.com')
                ->send(new OrderApprovalRequestMail($event->order, $supervisor));

        Mail::to($event->order->user)
            ->cc('luca.cavagnis.work@gmail.com')
            ->send(new OrderUnderApprovalMail($event->order));
    }

    public function handleOrderApproved($event) {
        Mail::to($event->order->user)
            ->cc('luca.cavagnis.work@gmail.com')
            ->send(new OrderApprovedMail($event->order));

        Mail::to('l.cavagnis@tutto-ufficio.it')
            ->cc('luca.cavagnis.work@gmail.com')
            ->send(new OrderReceived($event->order));
    }

    public function handleOrderRejected($event) {
        Mail::to($event->order->user)
            ->cc('luca.cavagnis.work@gmail.com')
            ->send(new OrderRejectedMail($event->order));
    }

    public function handleOrderConfirmed($event) {
        Mail::to($event->order->user)
            ->cc('luca.cavagnis.work@gmail.com')
            ->send(new OrderConfirmedMail($event->order));

        Mail::to('info@tutto-ufficio.it')
            ->cc('luca.cavagnis.work@gmail.com')
            ->send(new OrderReceived($event->order));
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
            OrderPending::class => 'handleOrderPending',
            OrderApproved::class => 'handleOrderApproved',
            OrderRejected::class => 'handleOrderRejected',
            OrderConfirmed::class => 'handleOrderConfirmed',
        ];
    }
}
