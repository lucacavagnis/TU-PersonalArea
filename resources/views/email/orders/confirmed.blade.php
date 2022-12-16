<x-mail::message>
# Ordine confermato

Ciao {{$order->user->name}},<br>
Il tuo ordine è stato approvato e a breve verrà preso in carico da un membro del nostro team.

<x-mail::button :url="$url">
    Visuallizza Ordine
</x-mail::button>

Grazie,<br>
Tutto Ufficio S.r.l.
</x-mail::message>
