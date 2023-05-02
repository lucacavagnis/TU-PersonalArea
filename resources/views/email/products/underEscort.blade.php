<x-mail::message>
# Prodotto in esaurimento

Ciao <b>{{$user->name}}</b>,</br>
il prodotto <b>{{$product->name}}</b> è in esaurimento.

Richiedi una nuova quotazione prima dell'esaurimento per non restare senza.

<x-mail::button :url="$url">
    Visualizza Prodotto
</x-mail::button>

Grazie,</br>
Tutto Ufficio S.r.l.
</x-mail::message>
