<x-mail::message>
# Richiesta nuova quotazione

Ciao {{$user->name}}, nuova richiesta di quotazione ricevuta.

<h3>Richiedente</h3>
<p>{{$user->name." (".$user->email.")"}}</p>

<h3>Prodotto</h3>
<p>{{"[".$product->sku."] ".$product->name}}</p>

<x-mail::button :url="$url">
Vedi prodotto
</x-mail::button>

Grazie,<br>
Tutto Ufficio S.r.l.
</x-mail::message>
