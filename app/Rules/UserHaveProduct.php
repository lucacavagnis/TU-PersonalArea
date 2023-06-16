<?php

namespace App\Rules;

use App\Models\Product;
use App\Models\User;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class UserHaveProduct implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if(Product::find($value)->company_id!=Auth::user()->company->id){
            $fail('Il prodotto non esiste');
        }
    }
}
