<?php

namespace App\Rules;

use App\Models\Cart;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Session;

class InCart implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if(!Session::has('cart') || !Session::get('cart')->has($this->route('cart'))){
                $fail('Il prodotto non è nel carrello');
            }
    }
}
