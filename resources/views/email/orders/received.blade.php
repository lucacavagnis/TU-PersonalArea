<x-mail::message>
# Ordine ricevuto

Ciao Tutto Ufficio S.r.l.,<br>
hai riecvuto un nuovo rodine da {{$order->user->company->name}}.

<h3>Richiedente</h3>
    {{$order->user->name}}

<x-mail::table>
    | Prodotto      | Qty         | Prezzo |
    | :------------- |:-------------|:-------------|
    @foreach($order->orderProducts()->get() as $orderProduct)
    | {{$orderProduct->product->name}}    | {{$orderProduct->quantity}}    | {{$orderProduct->product->reserved_price}}    |
    @endforeach
</x-mail::table>

<a href={{route('orders.show',$order->id)}} >oppure vedi altri dettagli</a>

Grazie,<br>
Tutto Ufficio S.r.l.
</x-mail::message>
