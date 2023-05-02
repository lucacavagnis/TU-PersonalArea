<?php

namespace App\Http\Requests;

use App\Models\Lot;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;

class UpdateCartProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $cartProduct=Session::get('cart')->get($this->route('cart'));
        $product = Lot::find($cartProduct->id);
        return $product && Gate::allows('order-product',$product);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            //
        ];
    }

    /**
     * Determinate if the product is avilable
     *
     * @return void
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function checkAvaibility(){
        $cartProduct=Session::get('cart')->get($this->route('cart'));
        $product=Lot::find($cartProduct->id);

        if($product->qty_available<=0)
            throw ValidationException::withMessages([
                'qty' => 'Qauntità non disponibile',
            ]);
    }
}
