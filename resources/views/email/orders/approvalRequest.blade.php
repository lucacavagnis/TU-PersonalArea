<x-mail::message>
# Approva l'ordine

Ciao {{$user->name}},<br>
Un ordine è in attesa della tua approvazione per procedere.

<h3>Richiedente</h3>
    {{$order->user->name}}

<x-mail::table>
    | Prodotto      | Qty         | Prezzo |
    | :------------- |:-------------|:-------------|
    @foreach($order->orderProducts()->get() as $orderProduct)
    | {{$orderProduct->product->name}}    | {{$orderProduct->quantity}}    | {{$orderProduct->product->reserved_price}}    |
    @endforeach
</x-mail::table>


<x-mail::button :url="$approveUrl">
    Approva
</x-mail::button>
<x-mail::button :url="$rejectUrl">
    Rifiuta
</x-mail::button>

<a href={{route('orders.show',$order->id)}} >oppure vedi altri dettagli</a>

Grazie,<br>
Tutto Ufficio S.r.l.
</x-mail::message>
