<x-mail::message>
# Prodotto in scadenza

Ciao {{$user->name}},</br>
il prodotto <b>{{$product->name}}</b> è in scadenza.

Hai tempo fino al <b>{{$product->expire_date}}</b> per richiedere il materiale.

<x-mail::button :url="$url">
    Visuallizza Prodotto
</x-mail::button>

Grazie,</br>
Tutto Ufficio S.r.l.
</x-mail::message>
