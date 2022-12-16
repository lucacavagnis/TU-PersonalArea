<x-mail::message>
    # Ordine approvato

Ciao {{$order->user->name}},<br>
Il tuo ordine è stato approvato!

<x-mail::button :url="$url">
    Visualizza Ordine
</x-mail::button>

Cordiali saluti,<br>
Lo staff di Tutto Ufficio S.r.l.
</x-mail::message>
