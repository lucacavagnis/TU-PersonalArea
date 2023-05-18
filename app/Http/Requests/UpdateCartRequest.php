<?php

namespace App\Http\Requests;

use App\Rules\InCart;
use App\Rules\UserHaveProduct;
use Illuminate\Foundation\Http\FormRequest;

class UpdateCartRequest extends FormRequest
{
    public function all($keys = null)
    {
        $data = parent::all($keys);
        $data['product_id'] = $this->route('cart');
        return $data;
    }

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'value' => 'required|numeric|min:0',
            'product_id'=>[new InCart,new UserHaveProduct],
        ];
    }


}
