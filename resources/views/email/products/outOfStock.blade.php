<x-mail::message>
# Prodotto esaurito

Ciao <b>{{$user->name}}</b>,</br>
il prodotto <b>{{$product->name}}</b> è esaurito.

Richiedi subito una nuova quotazione per non restare senza.

<x-mail::button :url="$url">
    Visualizza Prodotto
</x-mail::button>

Grazie,</br>
Tutto Ufficio S.r.l.
</x-mail::message>
