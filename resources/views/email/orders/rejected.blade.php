<x-mail::message>
    # Ordine rifiutato

Ciao {{$order->user->name}},<br>
ci dispiace, il tuo ordine è stato rifiutato!

<x-mail::button :url="$url">
    Visualizza Ordine
</x-mail::button>

Cordiali saluti,<br>
Lo staff di Tutto Ufficio S.r.l.
</x-mail::message>
