<?php

namespace Tests\Feature\Cart;

use App\Models\Company;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AddToCartTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_product_can_be_added_to_cart()
    {
        $company= Company::factory();
        $user=User::factory()->for($company)->create();
        $product=Product::factory()->for($company)->create();
        $response = $this->actingAs($user)->post(route('cart.store',['product_id'=>$product->id,'qty'=>rand(0,$product->qty_available)]));
        $response->assertStatus(200);
    }
}
