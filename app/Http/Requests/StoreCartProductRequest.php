<?php

namespace App\Http\Requests;

use App\Models\Product;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\ValidationException;

class StoreCartProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $product = Product::find($this->input('product_id'));
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
        $product=Product::find($this->input('product_id'));

        if($this->input('qty')>$product->qty_available || $this->input('qty')<1)
            throw ValidationException::withMessages([
                'qty' => 'Qauntità non disponibile',
            ]);
    }

    public function getServices(){
        $services=array();
        $inputs=$this->all();
        foreach($inputs as $name=>$input){
            $input_data=explode('-',$name);
            if($input=='true' && count($input_data)==2)
                $services[$input_data[0]][$input_data[1]]=$input;
        }
        return $services;
    }
}
