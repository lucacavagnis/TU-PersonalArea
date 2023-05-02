<?php

namespace App\Http\Requests;

use App\Models\Lot;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;

class StoreOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'country' => 'required|string',
            'province' => 'required|string',
            'city' => 'required|string',
            'postal_code' => 'required|string',
            'address' => 'required|string',
            'ioc' => '',
            'office' => 'string',
        ];
    }
}
