<x-mail::message>
    # Ordine in attesa di approvazione

Ciao {{$order->user->name}},<br>
Il tuo ordine è in attesa di approvazione di un tuo superiore!

<x-mail::button :url="$url">
    Visualizza Ordine
</x-mail::button>

Cordiali saluti,<br>
Lo staff di Tutto Ufficio S.r.l.
</x-mail::message>
