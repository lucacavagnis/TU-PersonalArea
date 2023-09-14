<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class UpdateProductLotsRequest extends FormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->role==0;

    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "*.protocol"=>"required|boolean",
            "*.warehouse"=>"required|boolean",
            "*.discount"=>"required|boolean",
            "*.product_id"=>"required|numeric|exists:products,id",
            "*.qty_available"=>"required|numeric|min:0|lte:*.qty_total",
            "*.qty_total"=>"required|numeric|min:0",
            "*.date"=>"required|date",
            "*.protocol_lot"=>"required_if:*.protocol,true",
            "*.protocol_lot.id"=>"numeric",
            "*.protocol_lot.protocol_id"=>"required_if:*.protocol,true|numeric|exists:protocols,id",
            "*.protocol_lot.original_price"=>"required_if:*.protocol,true|numeric|min:0",
            "*.protocol_lot.price"=>"numeric|min:0|lte:*.protocol_lot.original_price",
            "*.locations"=>"required_if:*.warehouse,true",
            "*.locations.*.slot.rack"=>"required_if:*.warehouse,true|alpha_dash",
            "*.locations.*.slot.shelf"=>"required_if:*.warehouse,true|alpha_dash",
            "*.locations.*.slot.pallet"=>"required_if:*.warehouse,true|alpha_dash",
            "*.locations.*.location_id"=>"numeric",
            "*.locations.*.qty"=>"required_if:*.warehouse,true|numeric|min:0",
        ];
    }

    /**
     * Get the "after" validation callables for the request.
     */
    public function after(): array
    {
        return [
            function (Validator $validator) {
            foreach ($this->input("*.protocol_lot.price") as $id=>$price)
                if ($this->input("*.discount",false)&&$this->input("*.protocol",false)&&$price==NULL) {
                    $validator->errors()->add(
                        $id.'.protocol_lot.price',
                        "'Prezzo scontato' è richiesto quando lo sconto è attivo"
                    );
                    return;
                }
            }
        ];
    }



    public function messages()
    {
        return [
            "*.protocol_lot.protocol_id.required_if"=>"':attribute' è richiesto",
            "*.protocol_lot.price.required_if"=>"':attribute' è richiesto",
            "*.locations.*.slot.rack.required_if"=>"':attribute' è richiesto",
            "*.locations.*.slot.shelf.required_if"=>"':attribute' è richiesto",
            "*.locations.*.slot.pallet.required_if"=>"':attribute' è richiesto",
            "*.locations.*.qty.required_if"=>"':attribute' è richiesto",
        ];
    }

}
