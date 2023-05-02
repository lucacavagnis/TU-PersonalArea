<x-mail::message>
# Richiesta nuova quotazione

Ciao Tutto Ufficio S.r.l.,<br>
hai ricevuto un nuova richiesta di quotazione da {{$user->company->name}}.

<h3>Richiedente</h3>
<p>{{$user->name}} ({{$user->email}})</p>

<h3>Prodotto</h3>
<p>{{"[".$product->sku."] ".$product->name}}</p>

<x-mail::button :url="$url">
    Vedi prodotto
</x-mail::button>

Grazie,<br>
Tutto Ufficio S.r.l.
</x-mail::message>
