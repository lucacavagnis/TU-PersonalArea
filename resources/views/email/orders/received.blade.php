<x-mail::message>
# Ordine ricevuto

Ciao Tutto Ufficio S.r.l.,<br>
hai ricevuto un nuovo ordine da {{$order->user->company->name}}.

<h3>Richiedente</h3>
    {{$order->user->name}}

<x-mail::table>
    | Prodotto      | Qty         | Prezzo | Locazione    |
    | :------------- |:-------------|:-------------|:-------------|
    @foreach($order->orderProducts()->get() as $orderProduct)
    | {{$orderProduct->product->name}}    | {{$orderProduct->quantity}}    | {{$orderProduct->product->reserved_price}}    | {{$orderProduct->product->warehouse_code}}    |
    @endforeach
</x-mail::table>

<h3>Note</h3>
{{$order->notes}}

<a href={{route('orders.show',$order->id)}} >oppure vedi altri dettagli</a>

Grazie,<br>
Tutto Ufficio S.r.l.
</x-mail::message>
