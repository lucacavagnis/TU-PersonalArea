<x-mail::message>
# Ordine ricevuto

Ciao Tutto Ufficio S.r.l.,<br>
hai ricevuto un nuovo ordine da {{$order->user->company->name}}.

<h3>Richiedente</h3>
    {{$order->user->name}} ({{$order->user->email}})

<x-mail::table>
    | Prodotto | Qtà | Protocollo | Locazione |
    | :--------|:----|:-------|:----------|
    @foreach($order->orderProducts as $orderProduct)
    | {{$orderProduct->product->name}}    | {{$orderProduct->quantity}}    | {{{isset($orderProduct->lot->protocolLot)? $orderProduct->lot->protocolLot->protocol->referral:'Nessuno'}}}    | @foreach($orderProduct->product->locations as $location) {{$location->slot->rack}}{{$location->slot->shelf}} @endforeach   |
    @endforeach
</x-mail::table>

<h3>Note</h3>
{{$order->notes}}


<a href={{route('orders.show',$order->id)}} >oppure vedi altri dettagli</a>

Grazie,<br>
Tutto Ufficio S.r.l.
</x-mail::message>
